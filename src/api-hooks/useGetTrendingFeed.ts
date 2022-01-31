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
  if (response.data && response.data.length) {
    response.data.forEach((element: any) => {
      try {
        const transformedElem = transformPost(element);
        if (transformedElem) {
          posts.push(transformedElem);
        }
      } catch(error) {}
    });
  };

  return {
    ...response,
    posts,
  };
};
