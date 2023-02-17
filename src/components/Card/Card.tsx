import { createContext, useContext, PropsWithChildren } from 'react';
import { CustomHeading } from 'components/CustomHeading';
import { Image } from 'components/Image';
import { ErrorBoundary } from 'components/ErrorBoundary';

type CardContext = {
  // todo: use pick inster of Partial
  item: Partial<Item>;
  className?: string;
  cssClassCard?: Partial<CardCssClass>;
  onClick?: any;
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
  return (
    <CardContext.Provider value={props}>
      <ErrorBoundary>
        <div className={props.className} onClick={props.onClick} data-testid="card-div">
          {props.children}
        </div>
      </ErrorBoundary>
    </CardContext.Provider>
  );
};

const PriceAndTitle = ({ children }: PropsWithChildren) => {
  const {
    item: { price, title, tags },
    cssClassCard
  } = useCard();
  const { classCard, classTag, classTitle, classPrice } = cssClassCard || {};
  const transfromTags = tags?.length ? tags?.join(' ').replace(/_/g, ' ') : '';
  return (
    <div className={`${classCard ?? ''}`}>
      {transfromTags && (
        <CustomHeading type="span" customClass={classTag} data-testid="price-heading">
          {transfromTags}
        </CustomHeading>
      )}
      {title && (
        <CustomHeading type="h3" customClass={classTitle} data-testid="title-heading">
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
