import { createContext, useContext, PropsWithChildren } from 'react';
import { Item } from 'components/Search/Search';
import { CustomHeading } from 'components/CustomHeading';
import { Image } from 'components/Image';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

type CardContext = {
  item?: Item;
  className?: string;
  cssClassCard?: {
    classCard?: string;
    classTag?: string;
    classTitle?: string;
    classPrice?: string;
  };
};

const CardContext = createContext<CardContext>({} as CardContext);
CardContext.displayName = 'CardContext';

export const useCard = () => {
  const context = useContext(CardContext);
  if (!Object.keys(context).length) {
    throw new Error('useCard must be used within a <Card />');
  }
  return context;
};

export const Card = (props: PropsWithChildren<CardContext>) => {
  console.log({ props });
  return (
    <CardContext.Provider value={props}>
      <ErrorBoundary>
        <div className={props.className}>{props.children}</div>
      </ErrorBoundary>
    </CardContext.Provider>
  );
};

type Props = {
  classCard?: string;
  classTag?: string;
  classTitle?: string;
  classPrice?: string;
};

const PriceAndTitle = ({ children }: PropsWithChildren<Props>) => {
  const {
    item: { price, title, tags },
    cssClassCard
  } = useCard();
  console.log(useCard());
  console.log(price, title, tags);
  const { classCard, classTag, classTitle, classPrice } = cssClassCard || {};
  const transfromTags = tags ? tags[0].replace(/_/g, ' ') : '';
  return (
    <div className={`${classCard ?? ''}`}>
      {transfromTags && (
        <CustomHeading type="span" customClass={classTag}>
          {transfromTags}
        </CustomHeading>
      )}
      {title && (
        <CustomHeading type="h3" customClass={classTitle}>
          {title}
        </CustomHeading>
      )}
      {price && (
        <CustomHeading type="h1" customClass={classPrice}>
          {price}
        </CustomHeading>
      )}
      {children}
    </div>
  );
};

Card.PriceAndTitle = PriceAndTitle;
Card.CardImg = Image;
