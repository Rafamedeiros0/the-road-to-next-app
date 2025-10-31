export type SearchParams = {
  search: string | string[] | undefined;
  sort: string | string[] | undefined;
};

export type SearchParamsAsync = Promise<SearchParams>;
