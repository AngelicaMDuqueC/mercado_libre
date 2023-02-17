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
  itemList: (T extends (infer U)[] ? U : never)[];
  render: (item: string | Partial<Item>, index?: number) => ReactNode;
};
export const RenderList = <T extends Partial<Item>[] | string[]>({
  className,
  itemList,
  render
}: RenderListProps<T>) => {
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
