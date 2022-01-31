import { BaseModuleService } from './baseModuleService';

export class FeedService extends BaseModuleService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTrendingFeeds(limit: number) {
    // const url = `/trending/feed?limit=${limit}`;
    const url = '/mocks/post.json';
    return this.apiRequest(url);
  }
}