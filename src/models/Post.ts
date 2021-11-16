export interface Author {
    id: string;
    name: string;
    nickName: string;
    avatar: string;
}

export interface Post {
  id: string;
  author: Author;
  text: string;
  videoUrl: string;
  hashtags: Array<string>;
  likesCount: number;
  commentsCount: number;
}
