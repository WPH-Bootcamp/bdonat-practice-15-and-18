import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/albums";

interface AlbumData {
  id: number;
  title: string;
}

const AlbumLists = () => {
  const [albums, setAlbums] = useState<AlbumData[]>([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get<AlbumData[]>(BASE_URL);
        setAlbums(res.data);
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Unknown error occurred";
        setError(message);
      }
    };
    fetchAlbums();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>2. Fetching Data Album </h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumLists;
