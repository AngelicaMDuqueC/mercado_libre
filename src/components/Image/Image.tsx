import styles from './Image.module.scss';

export type ImageResurce = {
  imgSrc: string;
  title: string;
  className?: string;
};
/**
 * Function to load the image
 * @param imgSrc  src for the image
 * @param title alt for the image
 * @param className class css to customizar img
 * @returns img element
 */
export const Image = ({ imgSrc, title, className }: ImageResurce) => {
  return (
    <div className={className}>
      <div className={styles['img-wrapper']} data-testis="card-img">
        <img alt={title} className="composition__photo composition__photo--p1" src={imgSrc} />
      </div>
    </div>
  );
};
