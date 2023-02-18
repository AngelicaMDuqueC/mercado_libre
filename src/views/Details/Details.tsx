import { Button, Card, Description, ErrorBoundary } from 'components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAxios } from 'hooks/useAxios';
import style from './Details.module.scss';
import { useEffect } from 'react';
import SEO from 'components/Seo/Seo';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';
import { PATHS } from 'utils';

export const DetailsView = () => {
  const location = useLocation();
  const itemPath = location.pathname.split('/')[2];
  const cssClassCard = {
    classCard: style.card__text,
    classTag: style.card__tags,
    classTitle: style.card__title,
    classPrice: style.card__price
  };
  const [item, setItem] = useState<Partial<Item> | null>(null);
  const [descripton, setDescription] = useState<ResponseDescription | null>(null);
  const [paths, setPath] = useState<Path[]>([]);
  const { response: itemResponse } = useAxios(`/items/${encodeURIComponent(itemPath)}`);
  const { response: descriptionData } = useAxios(`/items/${encodeURIComponent(itemPath)}/description`);

  console.log(itemResponse, descriptionData);

  useEffect(() => {
    if (itemResponse && descriptionData) {
      const { price, pictures, title = '', tags, id } = itemResponse as unknown as Item;
      const itemsPath = PATHS.get('ITEMS');
      const path = `${itemsPath}/${encodeURIComponent(id)}`;
      setPath([{ name: id, path }]);
      setItem({ price, pictures, title, tags });
      setDescription(descriptionData as unknown as ResponseDescription);
    }
  }, [itemPath, itemResponse, descriptionData]);
  return (
    <>
      <SEO title="Details" description="Description component" />
      <Breadcrumbs className={style.nav} paths={paths} />
      <section className={style.details__section}>
        <ErrorBoundary>
          {item && (
            <Card item={item} className={style.details__card} cssClassCard={cssClassCard}>
              {item?.title && item?.pictures && (
                <Card.CardImg title={item?.title} imgSrc={item?.pictures[0]?.url} className={style.card__img} />
              )}
              <Card.PriceAndTitle>
                <Button text={'Comprar'} className={style.card__btn} />
              </Card.PriceAndTitle>
            </Card>
          )}
          {descripton && (
            <Description
              description={descripton}
              tagType="h2"
              className={style.details__description}
              headingClass={style.details__heading}
              paragraphClass={style.details__paragraph}
            />
          )}
        </ErrorBoundary>
      </section>
    </>
  );
};
