import { Suspense, lazy, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAxios } from 'hooks/useAxios';
import { Card, Loader, ErrorBoundary } from 'components';
import { PATHS, FETCHPATH } from 'utils';
import style from './Results.module.scss';
import SEO from 'components/Seo/Seo';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';

const LazyRenderList = lazy(() => import('components/RenderList'));

export const ResultsView = () => {
  const location = useLocation();
  const navegate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery: string = searchParams.get('search') || '';
  const cssClassCard = {
    classCard: style.card__text,
    classTag: style.card__tags,
    classTitle: style.card__title,
    classPrice: style.card__price
  };
  const { response, fetchData } = useAxios();
  const [results, setResults] = useState<Item[]>([]);
  const [paths, setPaths] = useState<any[]>([]);

  const getItems = async () => {
    const searchPath = FETCHPATH.get('SEARCH_ITEMS');
    const path = `${searchPath}${encodeURIComponent(searchQuery)}`;
    await fetchData(path);
  };
  const handleNavegate = (id: string) => {
    const itemsPath = PATHS.get('ITEMS');
    const path = `${itemsPath}/${encodeURIComponent(id)}`;
    navegate(path, { state: paths });
  };
  //TODO : change  with the other fn of useAxios

  const createPaths = (values: any[]) => {
    let paths: string[] = [];
    values[0]?.values.forEach((value: any) => {
      const { path_from_root: pathsv } = value;
      paths = pathsv?.map((root: any) => {
        const { name } = root;
        if (name) {
          const searchPath = PATHS.get('SEARCH');
          return { name, path: `${searchPath}${encodeURIComponent(name)}` };
        }
      });
      setPaths(paths);
    });
  };
  useEffect(() => {
    if (searchQuery) getItems();
  }, [searchQuery]);

  useEffect(() => {
    if (response && 'results' in response) {
      const { filters, results } = response as SearchResult;
      createPaths(filters);
      setResults(results);
    }
  }, [response]);

  return (
    <>
      <SEO title="Resultados" description="Resultados de busqueda" />
      <Breadcrumbs className={style.nav} paths={paths} />
      <section className={style.results__section}>
        <ErrorBoundary>
          <Suspense fallback={<Loader loadingText="Loading..." />}>
            <LazyRenderList
              className={style.results__list}
              itemList={results}
              render={(item: any) => (
                <Card
                  item={item}
                  className={style.results__card}
                  cssClassCard={cssClassCard}
                  onClick={() => handleNavegate(item?.id)}
                >
                  <Card.CardImg title={item.title} imgSrc={item.thumbnail} className={style.card__img} />
                  <Card.PriceAndTitle />
                </Card>
              )}
            />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};
