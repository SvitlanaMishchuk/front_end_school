import { BaseModuleService } from './baseModuleService';

export class UserService extends BaseModuleService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserProfile(name: string) {
    // const url = `/user/info/${name}`;
    // eslint-disable-next-line more/no-hardcoded-configuration-data
    const url = '/mocks/user-profile.json';
    return this.apiRequest(url);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserFeed(name: string, limit: number) {
    // const url = `/user/feed/${name}?limit=${limit}`;
    // eslint-disable-next-line more/no-hardcoded-configuration-data
    const url = '/mocks/user-post.json';
    return this.apiRequest(url);
  }
}
