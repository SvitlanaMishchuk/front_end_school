import { Author } from './Author';

export interface UserProfile extends Author {
  signature: string;
  followersCount: number | undefined;
  followingCount: number | undefined;
  likesCount: number | undefined;
}
