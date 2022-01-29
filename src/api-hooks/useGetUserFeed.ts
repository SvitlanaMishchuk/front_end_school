import { useQuery } from 'react-query';
import { transformUserPost } from '../utils';
import { UserProfile } from '../models';
import { apiService } from '../api-service/apiService';

export const useGetUserFeed = (name: UserProfile['name'], limit = 30) => {
  const key = `get_user_feed_${name}_${limit}`;
  const response = useQuery(
    key,
    () => apiService.userService.getUserFeed(name, limit),
  );

  const userFeeds = response.data && response.data.length
    ? response.data.map((element: unknown) => transformUserPost(element)) : [];

  return {
    ...response,
    posts: userFeeds,
  };
};
