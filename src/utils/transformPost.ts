import { Post } from '../models';

/**
 * Convert unknown response entity to Post
 * @param entity untyped response entity
 * @returns Post
 */
export const transformPost = (entity: any): Post => ({
  id: entity.id,
  author: {
    id: entity.authorMeta.id,
    name: entity.authorMeta.name,
    nickName: entity.authorMeta.nickName,
    avatar: entity.authorMeta.avatar,
  },
  text: entity.text,
  videoUrl: entity.videoUrl,
  hashtags: entity.hashtags.map(({ id, name }: any) => ({ id, name })),
  likesCount: entity.diggCount,
  commentsCount: entity.commentCount,
});
