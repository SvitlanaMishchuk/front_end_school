import { UserPost } from '../models';

/**
 * Convert unknown response entity to UserPost
 * @param entity untyped response entity
 * @returns UserPost
 */
export const transformUserPost = (entity: any): UserPost => ({
  id: entity.id,
  cover: entity.video.cover,
  videoUrl: entity.video.playAddr,
  videoGif: entity.video.dynamicCover,
  viewCount: entity.stats.playCount,
});
