import { UserProfile } from '../models';

/**
 * Convert unknown response entity to UserProfile
 * @param entity untyped response entity
 * @returns UserProfile
 */
// Disabled due we don't know http response type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformUserProfile = (entity: any): UserProfile => {
  try {
    return {
      id: entity.user.id,
      avatar: entity.user.avatarMedium,
      name: entity.user.uniqueId,
      nickName: entity.user.nickname,
      signature: entity.user.signature,
      followersCount: entity.stats.followerCount,
      followingCount: entity.stats.followingCount,
      likesCount: entity.stats.heartCount,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in transformUserProfile:', error);
    throw error;
  }
};
