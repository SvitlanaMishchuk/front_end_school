import { useQuery } from 'react-query';
import { transformPost } from '../utils';
import { apiRequest } from './apiRequest';

export const useGetTrendingFeed = (limit = 30) => {
  const key = `get_trending_feed_${limit}`;
  const url = `/trending/feed?limit=${limit}`;
  const response = useQuery(key, async () => {
    const rawPosts = await apiRequest(url) as unknown as never[];
    return rawPosts.map((element) => transformPost(element));
  }, { refetchOnWindowFocus: false });

  return {
    ...response,
    posts: response.data ?? [],
  };
};
