export interface Paginate {
    page: number;
    totalCount: number;
    perPage: number;
    pagesCount: number;
    data:[any];
  }