// const headers = {
//   // eslint-disable-next-line more/no-hardcoded-configuration-data
//   'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//   // eslint-disable-next-line more/no-hardcoded-configuration-data
//   'x-rapidapi-key': 'ab07a9664emshc209d643777f489p1e0647jsn28d64e110ef5',
// };

const headers = {
  'Content-Type': 'application/json',
  // eslint-disable-next-line quote-props
  Accept: 'application/json',
};

export type ApiRequest = (
  url: string,
  options?: RequestInit | undefined
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<any>;

export const apiRequest: ApiRequest = async (
  url: string,
  options?: RequestInit,
) => {
  const fullUrl = `http://localhost:3000${url}`;
  const response = await fetch(fullUrl, {
    ...options,
    headers,
  });

  return response.json();
};
