export const apiRequest = (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  return fetch(url, {
    ...options,
    headers: {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": "ab07a9664emshc209d643777f489p1e0647jsn28d64e110ef5",
    },
  });
};
