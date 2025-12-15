import { useState, useEffect } from "react";
import axios from "axios";
import { type InfiniteFetchState } from "./types/fetch";

export function useInfiniteFetch<T>(
  baseUrl: string,
  limit: number = 10
): InfiniteFetchState<T> {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get<T[]>(baseUrl, {
          params: {
            _page: page,
            _limit: limit,
          },
        });

        const newData = res.data;
        if (newData.length === 0) {
          setHasMore(false);
          return;
        }
        setData((prev) => [...prev, ...newData]);
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Unknown error occurred";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchPage();
    }
  }, [baseUrl, page, limit, hasMore]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };
  return {
    data,
    loading,
    error,
    page,
    hasMore,
    loadMore,
  };
}
