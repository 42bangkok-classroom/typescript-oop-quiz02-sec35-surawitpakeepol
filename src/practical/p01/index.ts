import axios from "axios";

type PostResponse = 
{
  id: number;
  title: string;
};

export async function getEdgePosts(): Promise<
  { id: number; title: string }[]
> {
  try {
    const response = await axios.get<PostResponse[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = response.data.map(({ id, title }) => ({ id, title }));

    if (posts.length === 0) {
      return [];
    }

    if (posts.length === 1) {
      return [posts[0], posts[0]];
    }

    return [posts[0], posts[posts.length - 1]];
  } catch 
  {
    return [];
  }
}
