import { useFetch } from "../../../hooks/useFetch";
import type { Post } from "./types/post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const PostPages = () => {
  const { data, loading, error } = useFetch<Post[]>(BASE_URL);

  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>PostPages</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            Title : {post.title}
            <p>Body : {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPages;
