import styles from './Image.module.scss';

export type ImageResurce = {
  imgSrc: string;
  title: string;
  srcSmall?: string;
  className?: string;
};
/**
 * Function to load the image
 * @param src  src for the image
 * @returns Promise with  a img element
 */
export const Image = ({ imgSrc, title, srcSmall, className }: ImageResurce) => {
  console.log(imgSrc);
  return (
    <div className={className}>
      <div className={styles['img-wrapper']}>
        {srcSmall ? (
          <img
            srcSet={`${srcSmall} 300w, ${imgSrc} 1000w`}
            alt={title}
            className="composition__photo composition__photo--p1"
            src={imgSrc}
          />
        ) : (
          <img alt={title} className="composition__photo composition__photo--p1" src={imgSrc} />
        )}
      </div>
    </div>
  );
};
