import { UserPost } from '../models';

/**
 * Convert unknown response entity to UserPost
 * @param entity untyped response entity
 * @returns UserPost
 */
// Disabled due we don't know http response type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformUserPost = (entity: any): UserPost | undefined => {
  try {
    return {
      id: entity.id,
      cover: entity.video.cover,
      videoUrl: entity.video.playAddr,
      videoGif: entity.video.dynamicCover,
      viewCount: entity.stats.playCount || undefined,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in transformUserPost:', error);
    throw error;
  }
};
