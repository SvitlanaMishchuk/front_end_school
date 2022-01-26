import { Post } from '../models';

/**
 * Convert unknown response entity to Post
 * @param entity untyped response entity
 * @returns Post
 */
// Disabled due we don't know http response type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  hashtags: entity.hashtags.map(({ id, name }: never) => ({ id, name })),
  likesCount: entity.diggCount,
  commentsCount: entity.commentCount,
});
