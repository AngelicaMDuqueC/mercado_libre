import { Card } from 'components';
import style from './NotFound.module.scss';

export const NotFound = () => {
  const errorrText = {
    title: 'No hay publicaciones que coincidan con tu búsqueda.',
    src: 'public/images/IcSearch.svg'
  };
  return (
    <section className={style.notResult__section}>
      <Card item={errorrText} className={style.notResult__card}>
        <Card.CardImg title={errorrText.title} imgSrc={errorrText.src} className={style.card__img} />
        <Card.PriceAndTitle />
      </Card>
    </section>
  );
};
