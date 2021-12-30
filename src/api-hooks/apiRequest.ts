const headers = {
  // eslint-disable-next-line more/no-hardcoded-configuration-data
  'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
  // eslint-disable-next-line more/no-hardcoded-configuration-data
  'x-rapidapi-key': 'ab07a9664emshc209d643777f489p1e0647jsn28d64e110ef5',
};

export const apiRequest = async (
  url: string,
  options?: RequestInit,
): Promise<Response> => {
  const fullUrl = `https://tiktok33.p.rapidapi.com${url}`;
  const response = await fetch(fullUrl, {
    ...options,
    headers,
  });
  return response.json();
};
