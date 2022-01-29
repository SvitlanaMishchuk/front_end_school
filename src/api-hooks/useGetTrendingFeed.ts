import { useQuery } from 'react-query';
import { transformPost } from '../utils';
import { apiService } from '../api-service/apiService';

export const useGetTrendingFeed = (limit = 30) => {
  const key = `get_trending_feed_${limit}`;

  const response = useQuery(
    key,
    () => apiService.feedService.getTrendingFeeds(limit),
    { refetchOnWindowFocus: false },
  );

  const posts = response.data && response.data.length
    ? response.data.map((element: unknown) => transformPost(element)) : [];

  return {
    ...response,
    posts,
  };
};
