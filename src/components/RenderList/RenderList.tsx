import { Item } from 'components/Search/Search';
import style from './RenderList.module.scss';

export const RenderList = ({ className, searchItems, render }: any) => {
  console.log(searchItems, render);

  return (
    <div className={`${style.searchResult} ${className ?? ''}`}>
      {searchItems && (
        <ul>
          {searchItems.map((item: Partial<Item>) => {
            return <li key={item.id}>{render(item)}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
