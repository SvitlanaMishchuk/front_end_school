import { Author } from './Author';

export interface UserProfile extends Author {
    signature: string;
    followersCount: number;
    followingCount: number;
    likesCount: number;
}
