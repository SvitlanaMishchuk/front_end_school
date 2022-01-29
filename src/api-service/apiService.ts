import { FeedService } from './feedService';
import { UserService } from './userService';

export class ApiService {
  feedService: FeedService;

  userService: UserService;

  constructor() {
    this.feedService = new FeedService();
    this.userService = new UserService();
  }
}

export const apiService = new ApiService();
