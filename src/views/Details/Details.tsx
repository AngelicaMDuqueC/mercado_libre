import { Button, Card } from 'components';
import { Description } from 'components/Description/Description';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { Item } from 'components/Search/Search';
import style from './Details.module.scss';
const item: Item = {
  id: 'MLA1339976441',
  title: 'Venta - Casa Tipo Duplex - 4 Ambientes -  Fondo Libre  - Villa Luzuriaga - Permuta - Financia',
  condition: 'used',
  category_id: 'MLA401685',
  thumbnail: 'http://http2.mlstatic.com/D_962869-MLA53685395292_022023-I.jpg',
  currency_id: 'USD',
  price: 115000,
  tags: ['good_quality_thumbnail', 'good_quality_thumbnail'],
  shipping: {
    free_shipping: false
  },
  seller: {
    id: 1,
    nickname: 'string'
  },
  pictures: [
    {
      id: '962869-MLA53685395292_022023',
      url: 'http://http2.mlstatic.com/D_962869-MLA53685395292_022023-O.jpg',
      secure_url: 'https://http2.mlstatic.com/D_962869-MLA53685395292_022023-O.jpg',
      size: '500x332',
      max_size: '1200x798',
      quality: ''
    }
  ]
};

export const DetailsView = () => {
  const cssClassCard = {
    classCard: style.card__text,
    classTag: style.card__tags,
    classTitle: style.card__title,
    classPrice: style.card__price
  };
  return (
    <section className={style.details__section}>
      <ErrorBoundary>
        <Card item={item} className={style.details__card} cssClassCard={cssClassCard}>
          <Card.CardImg title={item.title} imgSrc={item.pictures[0].url} className={style.card__img} />
          <Card.PriceAndTitle>
            <Button text={'Comprar'} className={style.card__btn} />
          </Card.PriceAndTitle>
        </Card>
        <Description
          id={'MLA1339976441'}
          title={'title descript'}
          tagType="h2"
          className={style.details__description}
          headingClass={style.details__heading}
          paragraphClass={style.details__paragraph}
        />
      </ErrorBoundary>
    </section>
  );
};
