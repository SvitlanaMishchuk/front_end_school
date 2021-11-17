import { useQuery } from "react-query";
import { Author } from "../models";
import { transformUserProfile } from "../utils";
import { apiRequest } from "./apiRequest";

export const useGetUserProfile = (name: Author["name"]) => {
  const key = `get_user_profile_${name}`;
  const url = `/user/info/${name}`;
  return useQuery(key, async () => {
    const rawProfile = await apiRequest(url);
    return transformUserProfile(rawProfile);
  });
};
