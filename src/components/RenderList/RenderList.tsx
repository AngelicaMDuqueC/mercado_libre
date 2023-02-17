import { ReactNode } from 'react';
import style from './RenderList.module.scss';

/**
 * RenderList of customs list
 * @params className  className: string representing the CSS class to modify the list
 * @param itemList  Array of items to be displayed in the list
 * @param render a function that takes in an item and returns a ReactNode
 * @returns ReactNode
 */

type RenderListProps = {
  className?: string;
  itemList: Partial<Item>[];
  render: (item: Partial<Item>) => ReactNode;
};
export const RenderList = ({ className, itemList, render }: RenderListProps) => {
  return (
    <div className={`${style.searchResult} ${className ?? ''}`}>
      {itemList && (
        <ul>
          {itemList.map((item: Partial<Item>) => {
            return <li key={item.id}>{render(item)}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
