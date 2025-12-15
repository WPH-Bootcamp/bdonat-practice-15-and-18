export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: null | string;
}

export interface InfiniteFetchState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  loadMore: () => void;
}
