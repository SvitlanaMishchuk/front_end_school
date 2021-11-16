import { useQuery, UseQueryResult } from "react-query";
import { apiRequest } from "./apiRequest";
import singlePost from "../mocks/post.json";
import { transformPost } from "../utils";
import { Post } from "../models";

const mockResponse = () => Array.from(new Array(30)).map(() => transformPost(singlePost));

export const useGetTrendingFeed = (limit: number = 30) => {
  const key = `get_trending_feed_${limit}`;
  const url = `https://tiktok33.p.rapidapi.com/trending/feed?limit=${limit}`;
  // TODO when will use real api
  // return useQuery(key, () => apiRequest('/test'));

  const res = useQuery<Post[]>(key, async () => {
    // delay 2s
    await new Promise(resolve => setTimeout(resolve, 2000))
    return mockResponse();
  })

  return {
    ...res,
    posts: res.data ?? [],
  }
};