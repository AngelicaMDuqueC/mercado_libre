import { PropsWithChildren, useEffect, useRef } from 'react';
// import styles from './Search.module.scss';

type ListElementProps = PropsWithChildren<{
  isFocused: boolean;
}>;

const ListElement = (props: ListElementProps) => {
  const { children, isFocused, ...rest } = props;
  const localRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (localRef.current && isFocused) {
      localRef.current.focus();
    }
  }, [isFocused]);

  return (
    <li ref={localRef} tabIndex={isFocused ? 0 : -1} {...rest}>
      {children}
    </li>
  );
};

type ListProps = {
  results: string[];
  focusedIndex: number;
};

export const List = ({ results, focusedIndex }: ListProps) => {
  return (
    <ul>
      {results.map((result, index) => (
        <ListElement key={result} isFocused={index === focusedIndex}>
          {result}
        </ListElement>
      ))}
    </ul>
  );
};
