import { useQuery } from "react-query";
import { transformPost } from "../utils";
import { apiRequest } from "./apiRequest";

export const useGetTrendingFeed = (limit: number = 30) => {
  const key = `get_trending_feed_${limit}`;
  const url = `/trending/feed?limit=${limit}`;
  const res = useQuery(key, async () => {
    const rawPosts = await apiRequest(url) as unknown as any[];
    return rawPosts.map(transformPost)
  }, { refetchOnWindowFocus: false });

  return {
    ...res,
    posts: res.data ?? [],
  };
};
