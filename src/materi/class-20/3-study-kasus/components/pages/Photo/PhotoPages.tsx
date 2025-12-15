import { useEffect } from "react";
import { useInfiniteFetch } from "../../../hooks/useInfiniteFetch";
import type { PhotoData } from "./types/photo";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";

const PhotoPages = () => {
  const {
    data: photos,
    loading,
    error,
    hasMore,
    loadMore,
  } = useInfiniteFetch<PhotoData>(BASE_URL, 1000);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (nearBottom && hasMore && !loading) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loadMore, loading]);
  return (
    <div>
      <h1>PhotoPages</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h3>{photo.title}</h3>
          <img
            src={"https://jsonplaceholder.typicode.com/mockend.svg"}
            alt={photo.url}
          />
        </div>
      ))}

      {loading && <p>Loadinggg photooss....</p>}
      {error && <p>{error}</p>}
      {!hasMore && <p style={{ color: "red" }}>No more photos.</p>}
    </div>
  );
};
export default PhotoPages;
