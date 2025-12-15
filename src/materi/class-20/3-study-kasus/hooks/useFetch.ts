import { useState, useEffect } from "react";
import axios from "axios";
import type { FetchState } from "./types/fetch";

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    axios
      .get<T>(url)
      .then((res) => setState({ data: res.data, loading: false, error: null }))
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setState({
          data: null,
          loading: false,
          error: err.message,
        });
      });
  }, [url]);
  return state;
}
