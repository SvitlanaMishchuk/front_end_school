import { useQuery } from 'react-query';
import { transformUserPost } from '../utils';
import { UserPost, UserProfile } from '../models';
import { apiService } from '../api-service/apiService';

export const useGetUserFeed = (name: UserProfile['name'], limit = 30) => {
  const key = `get_user_feed_${name}_${limit}`;
  const response = useQuery(key, () => apiService.userService.getUserFeed(name, limit));
  const userFeeds: UserPost[] = [];
  if (response.data && response.data.length > 0) {
    try {
      response.data.forEach((element: unknown) => {
        const transformedFeed = transformUserPost(element);
        if (transformedFeed) {
          userFeeds.push(transformedFeed);
        }
      });
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  return {
    ...response,
    posts: userFeeds,
  };
};
