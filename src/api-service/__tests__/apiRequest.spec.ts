import { apiRequest } from '../apiRequest';
import mockPost from '../../../public/mocks/post.json';
import mockUserProfile from '../../../public/mocks/user-profile.json';
import mockUserFeed from '../../../public/mocks/user-post.json';
import { GlobalStyles } from '@mui/styled-engine';
import { jsxExpressionContainer } from '@babel/types';

const argUrlMockPost = '/mocks/post.json';
const argUrlMockUserProfile = '/mocks/user-profile.json';
const argUrlMockUserPosts = '/mocks/user-post.json';

beforeEach(() => {
  const fetch = async (url: RequestInfo, options: RequestInit | undefined) => {
    return {
      json: () => Promise.resolve({ url, options })
    } as Response;
  };

  global.fetch = jest.fn(fetch);
});

afterAll(() => {
  jest.clearAllMocks();
});

test('apiRequest: return api response', async () => {
  const exptectedResult = {
    url: 'http://localhost:3000/mocks/post.json',
    options: {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  };

  const promisedRequest = apiRequest(argUrlMockPost) as any;
  expect(promisedRequest).toBeInstanceOf(Promise);
  const res = await promisedRequest;
  expect(res.url).toBe(exptectedResult.url);
  expect(res.options).toStrictEqual(exptectedResult.options);


  const res2 = await apiRequest(argUrlMockPost, { mode: 'no-cors' }) as any;
  expect(res.url).toBe(exptectedResult.url);
  expect(res.options).toStrictEqual(exptectedResult.options);
});
