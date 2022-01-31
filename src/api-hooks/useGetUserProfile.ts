import { useQuery } from 'react-query';
import { Author, UserProfile } from '../models';
import { transformUserProfile } from '../utils';
import { apiService } from '../api-service/apiService';

export const useGetUserProfile = (name: Author['name']) => {
  const key = `get_user_profile_${name}`;
  const response = useQuery(
    key,
    () => apiService.userService.getUserProfile(name),
  );

  let userProfile: UserProfile | undefined;
  if (response.data) {
    try {
      userProfile = transformUserProfile(response.data)
    } catch (error) {
      alert('Something went wrong. Please, try again.');
    }
  }
  
  return {
    ...response,
    data: response.data && userProfile,
  };
};
