import { useState, useEffect, useRef } from 'react';
import { useAxios } from 'hooks/useAxios';
import { useForm } from 'react-hook-form';
import { useListFocus } from 'hooks/useListFocus';
import { List } from 'components/Search/List';
import styles from './Search.module.scss';

type FormInputs = {
  search: string;
};

type SearchBarProps = {
  placeholder: string;
};

const label = 'Ingresa lo que quieras encontrar';

// TODO: add doc and fix issue with the click on the list
//TODO: use the renderList
// add styles

export const Search = ({ placeholder }: SearchBarProps) => {
  const formMethods = useForm<FormInputs>();
  const { register, watch } = formMethods;

  const divRef = useRef<HTMLDivElement>(null);
  const [suggestedQueries, setSuggestedQueries] = useState<string[]>([]);
  const [openSugestions, setOpenSugestions] = useState(false);
  const [selectedQuery, setSelectedQuery, focusedIndex, setListSize] = useListFocus<FormInputs>(
    divRef,
    suggestedQueries,
    formMethods,
    'search'
  );
  const { response, fetchData } = useAxios();
  const search = watch('search');
  const getSuggestionsQueries = async () => {
    const path = `sites/MLA/autosuggest?limit=6&q=${encodeURIComponent(search)}`;
    await fetchData(path);
    if (response) {
      const { suggested_queries } = response as unknown as AutosuggestReponse;
      const sugestions = suggested_queries.map(({ q }) => q);
      setSuggestedQueries(sugestions);
      setOpenSugestions(true);
      setListSize(sugestions.length);
    }
  };

  useEffect(() => {
    if (search && focusedIndex === null) {
      getSuggestionsQueries();
    }
    if (search?.length === 0) {
      setSuggestedQueries([]);
    }
  }, [search]);

  useEffect(() => {
    setOpenSugestions(false);
  }, [selectedQuery]);

  return (
    <div ref={divRef}>
      <form role="search" className={styles.searchForm}>
        <div className={styles.search}>
          <input
            {...register('search')}
            className={styles.search__input}
            type="search"
            aria-label={label}
            placeholder={placeholder}
            autoComplete={'off'}
            onFocus={() => {
              if (search?.length > 0) {
                setOpenSugestions(true);
              }
            }}
          />
          {/* TODO: add Icon */}
          <button type="submit" className={styles.search__button}>
            search
          </button>
        </div>
        {openSugestions && (
          <div className={styles.searchResult}>
            <List
              focusedIndex={focusedIndex}
              results={suggestedQueries}
              setOpenSugestions={setOpenSugestions}
              setSelectedQuery={setSelectedQuery}
            />
          </div>
        )}
      </form>
    </div>
  );
};
