import { PropsWithChildren, useEffect, useRef } from 'react';

// import styles from './Search.module.scss';

type ListElementProps = PropsWithChildren<{
  isFocused: boolean;
  onClick: any;
}>;
const callAll =
  (...fns: any[]) =>
  (...args: any) =>
    fns.forEach((fn) => fn?.(...args));

const ListElement = (props: ListElementProps) => {
  const { children, isFocused, onClick } = props;
  const localRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (localRef.current && isFocused) {
      localRef.current.focus();
    }
  }, [isFocused]);

  return (
    <li ref={localRef} tabIndex={isFocused ? 0 : -1} onClick={callAll(onClick)}>
      {children}
    </li>
  );
};

type ListProps = {
  results: string[];
  focusedIndex: number | null;
  setOpenSugestions: any;
  setSelectedQuery: any;
};

export const List = ({ results, focusedIndex, setOpenSugestions, setSelectedQuery }: ListProps) => {
  return (
    <ul>
      {results.map((result, index) => (
        <ListElement
          key={result}
          isFocused={index === focusedIndex}
          onClick={() => {
            setSelectedQuery(result);
            setOpenSugestions(false);
          }}
        >
          {result}
        </ListElement>
      ))}
    </ul>
  );
};
