import { useQuery } from 'react-query';
import { Author } from '../models';
import { transformUserProfile } from '../utils';
import { apiService } from '../api-service/apiService';

export const useGetUserProfile = (name: Author['name']) => {
  const key = `get_user_profile_${name}`;
  const response = useQuery(
    key,
    () => apiService.userService.getUserProfile(name),
  );

  return {
    ...response,
    data: response.data && transformUserProfile(response.data),
  };
};
