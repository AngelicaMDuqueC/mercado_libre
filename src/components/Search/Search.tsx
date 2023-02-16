import { useState, useEffect } from 'react';
import { useAxios } from 'hooks/useAxios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useListFocus } from 'hooks/useListFocus';
import { List } from 'components/Search/List';
import styles from './Search.module.scss';
// import { RenderList } from 'components/RenderList';
// import { Card } from 'components';

type FormInputs = {
  search: string;
};

type SearchBarProps = {
  placeholder: string;
};

type SugestedQuery = {
  match_end: number;
  match_start: number;
  q: string;
};

type AutosuggestReponse = {
  q: string;
  suggested_queries: SugestedQuery[];
};

export type Item = {
  id: string;
  title: string;
  condition: string;
  category_id: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  tags: string[];
  shipping: {
    free_shipping: false;
  };
  seller: {
    id: number;
    nickname: string;
  };
  pictures: {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
  }[];
};

type Filter = {
  id: string;
  name: string;
  values: [
    {
      id: string;
      name: string;
      path_from_root: [
        {
          id: string;
          name: string;
        }
      ];
    }
  ];
};

type SearchResult = {
  site_id: string;
  query: string;
  results: Item[];
  filters: Filter;
};

const label = 'Ingresa lo que quieras encontrar';

export const Search = ({ placeholder }: SearchBarProps) => {
  const { register, handleSubmit, watch, setFocus } = useForm<FormInputs>();
  const [suggestedQueries, setSuggestedQueries] = useState<string[]>([]);
  const [searchItems, setSearchItems] = useState<Item[]>([]);
  const [focusedIndex, setListSize] = useListFocus<FormInputs>(setFocus, 'search');
  const search = watch('search');
  const { response, error, loading, fetchData } = useAxios();

  const getSuggestionsQueries = async () => {
    const path = `sites/MLA/autosuggest?limit=6&q=${encodeURIComponent(search)}`;
    await fetchData(path);
    const { suggested_queries } = response as AutosuggestReponse;
    const sugestions = suggested_queries.map(({ q }) => q);
    setSuggestedQueries(sugestions);
    setListSize(sugestions.length);
  };

  const getSearchItems = async (search: string) => {
    console.log({ search });
    const searchQuery = focusedIndex === null ? search : suggestedQueries[focusedIndex];
    const path = `sites/MLA/search?limit=10&q=${encodeURIComponent(searchQuery)}`;
    await fetchData(path);
  };

  const onSubmitHandler: SubmitHandler<FormInputs> = async ({ search }) => {
    try {
      getSearchItems(search);
    } catch (error) {
      console.error('hubo error');
    }
  };

  useEffect(() => {
    if (search) {
      getSuggestionsQueries();
    }
  }, [search]);

  useEffect(() => {
    console.log(response);
    if (response && 'results' in response) {
      const { results } = response as SearchResult;
      setSearchItems(results);
    }
  }, [response]);

  return (
    <>
      <form role="search" onSubmit={handleSubmit(onSubmitHandler)} className={styles.searchForm}>
        <div className={styles.search}>
          <input
            {...register('search')}
            className={styles.search__input}
            type="search"
            aria-label={label}
            placeholder={placeholder}
            autoComplete={'off'}
          />
          <button type="submit" className={styles.search__button}>
            <span className={styles.search__icon} />
          </button>
        </div>
        <div className={styles.searchResult}>
          <List focusedIndex={focusedIndex} results={suggestedQueries} />
        </div>
      </form>
      {/* {searchItems && (
        <RenderList
          searchItems={searchItems}
          render={(item: any) => {
            <Card item={item}>
              <Card.CardImg title={item.title} imgSrc={item.thumbnail} />
              <Card.PriceAndTitle />
            </Card>;
          }}
        />
      )} */}
    </>
  );
};
