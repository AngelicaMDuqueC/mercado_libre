import { Suspense, lazy, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAxios } from 'hooks/useAxios';
import { Card, Loader, ErrorBoundary } from 'components';
import { PATHS, FETCHPATH } from 'utils';
import style from './Results.module.scss';
import SEO from 'components/Seo/Seo';

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

  const getItems = async () => {
    const searchPath = FETCHPATH.get('SEARCH_ITEMS');
    const path = `${searchPath}${encodeURIComponent(searchQuery)}`;
    await fetchData(path);
  };
  const handleNavegate = (id: string) => {
    const itemsPath = PATHS.get('ITEMS');
    const path = `${itemsPath}/${encodeURIComponent(id)}`;
    navegate(path);
  };
  //TODO : change  with the other fn of useAxios
  useEffect(() => {
    if (searchQuery) getItems();
  }, [searchQuery]);

  useEffect(() => {
    if (response && 'results' in response) setResults((response as SearchResult)?.results);
  }, [response]);

  return (
    <section className={style.results__section}>
      <SEO title="Resultados" description="Resultados de busqueda" />
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
  );
};
