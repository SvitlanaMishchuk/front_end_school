import { useQuery } from "react-query";
import { Author } from "../models";
import userProfile from "../mocks/user-profile.json";
import { transformUserProfile } from "../utils";

const mockResponse = () => transformUserProfile(userProfile);

export const useGetUserProfile = (name: Author["name"]) => {
  const key = `get_user_profile_${name}`;
  const url = `/user/info/${name}`;
  // TODO when will use real api
  // return useQuery(key, () => apiRequest(url));

  return useQuery(
    key,
    async () => {
      // delay 2s
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return mockResponse();
    },
    { refetchOnWindowFocus: false }
  );
};
