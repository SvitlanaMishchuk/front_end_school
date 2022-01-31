import { createApiRequestMocks } from '../../tests/mocks/apiRequestMock';
import { FeedService } from '../feedService';

test('Feeds Service: getTrendingFeeds success', async () => {
  const apiRequestMock = createApiRequestMocks();

  const inst = new FeedService();
  await inst.getTrendingFeeds(1);
  expect(apiRequestMock).toHaveBeenCalledWith("/mocks/post.json");
});

test('Feeds Service: getTrendingFeeds failure', async () => {
  createApiRequestMocks("failure message", true);

  const inst = new FeedService();

  inst.getTrendingFeeds(1).catch((e) => {
    expect(e).toBe("failure message");
  })
});
