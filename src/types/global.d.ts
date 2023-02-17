export {};

declare global {
  type Item = {
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

  type SugestedQuery = {
    match_end: number;
    match_start: number;
    q: string;
  };

  type AutosuggestReponse = {
    q: string;
    suggested_queries: SugestedQuery[];
  };

  type ResponseDescription = {
    text: string;
    plain_text: string;
    last_updated: string;
    date_created: string;
    snapshot: { [key: strng]: string };
  };
  type Response = SearchResult | AutosuggestReponse | ResponseDescription | null;

  type BtnSize = 'regular' | 'small';
  type BtnType = 'button' | 'submit' | 'reset';
  type IconPlace = 'left' | 'right';

  type CardCssClass = {
    classCard?: string;
    classTag?: string;
    classTitle?: string;
    classPrice?: string;
  };
  type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
}
