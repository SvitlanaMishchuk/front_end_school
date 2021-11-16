export interface Author {
  id: string;
  name: string;
  nickName: string;
  avatar: string;
}

export interface Hashtag {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  author: Author;
  text: string;
  videoUrl: string;
  hashtags: Hashtag[];
  likesCount: number;
  commentsCount: number;
}
