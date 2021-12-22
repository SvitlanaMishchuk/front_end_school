import { UserProfile } from '../models';

/**
 * Convert unknown response entity to UserProfile
 * @param entity untyped response entity
 * @returns UserProfile
 */
export const transformUserProfile = (entity: any): UserProfile => ({
  id: entity.user.id,
  avatar: entity.user.avatarMedium,
  name: entity.user.uniqueId,
  nickName: entity.user.nickname,
  signature: entity.user.signature,
  followersCount: entity.stats.followerCount,
  followingCount: entity.stats.followingCount,
  likesCount: entity.stats.heartCount,
});
