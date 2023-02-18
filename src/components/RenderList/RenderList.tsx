import { ReactNode } from 'react';
import style from './RenderList.module.scss';

/**
 * RenderList of customs list
 * @params className  className: string representing the CSS class to modify the list
 * @param itemList  Array of items to be displayed in the list
 * @param render a function that takes in an item and returns a ReactNode
 * @returns ReactNode
 */

type RenderListProps<T> = {
  className?: string;
  itemList: T extends Partial<Item>[] ? Partial<Item>[] : Path[];
  render: (item: Path | Partial<Item>, index?: number) => ReactNode;
};
export const RenderList = <T extends Partial<Item>[] | Path[]>({ className, itemList, render }: RenderListProps<T>) => {
  return (
    <>
      <div className={`${style.searchResult} ${className ?? ''}`}>
        {itemList && (
          <ul>
            {itemList.map((item, index) => {
              return <li key={index}>{render(item, index)}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};
