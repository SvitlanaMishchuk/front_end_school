import { useQuery } from "react-query";
import singlePost from "../mocks/user-post.json";
import { transformUserPost } from "../utils";
import { UserProfile } from "../models";

const mockResponse = () =>
  Array.from(new Array(30)).map(() => {
    const userPost = transformUserPost(singlePost);
    userPost.id = `${Math.random() + Math.random()}`;
    return userPost;
  });

export const useGetUserFeed = (
  name: UserProfile["name"],
  limit: number = 30
) => {
  const key = `get_user_feed_${name}_${limit}`;
  const url = `/user/feed/${name}?limit=${limit}`;
  // TODO when will use real api
  // return useQuery(key, () => apiRequest('/test'));

  const res = useQuery(
    key,
    async () => {
      // delay 2s
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return mockResponse();
    },
    { refetchOnWindowFocus: false }
  );

  return {
    ...res,
    posts: res.data ?? [],
  };
};
