import { useQuery } from "react-query";
import { transformUserPost } from "../utils";
import { UserProfile } from "../models";
import { apiRequest } from "./apiRequest";

export const useGetUserFeed = (
  name: UserProfile["name"],
  limit: number = 30
) => {
  const key = `get_user_feed_${name}_${limit}`;
  const url = `/user/feed/${name}?limit=${limit}`;
  const res = useQuery(key, async () => {
    const rawFeed = (await apiRequest(url)) as unknown as any[];
    return rawFeed.map(transformUserPost);
  });

  return {
    ...res,
    posts: res.data ?? [],
  };
};
