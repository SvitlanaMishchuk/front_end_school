import { BaseModuleService } from './baseModuleService';

export class UserService extends BaseModuleService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserProfile(name: string) {
    // const url = `/user/info/${name}`;
    const url = '/mocks/user-profile.json';
    return this.apiRequest(url);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserFeed(name: string, limit: number) {
    // const url = `/user/feed/${name}?limit=${limit}`;
    const url = '/mocks/user-post.json';
    return this.apiRequest(url);
  }
}
