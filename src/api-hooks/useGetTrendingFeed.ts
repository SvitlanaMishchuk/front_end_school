import { useQuery } from 'react-query';
import { transformPost } from '../utils';
import { apiService } from '../api-service/apiService';
import { Post } from '../models';

export const useGetTrendingFeed = (limit = 30) => {
  const key = `get_trending_feed_${limit}`;

  const response = useQuery(
    key,
    () => apiService.feedService.getTrendingFeeds(limit),
    { refetchOnWindowFocus: false },
  );

  const posts: Post[] = [];
  if (response.data && response.data.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    response.data.forEach((element: any) => {
      try {
        const transformedElement = transformPost(element);
        if (transformedElement) {
          posts.push(transformedElement);
        }
        // eslint-disable-next-line no-empty
      } catch (error) {}
    });
  }

  return {
    ...response,
    posts,
  };
};
