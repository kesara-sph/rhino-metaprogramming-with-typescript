export interface Query {
  _page?: number;
  _limit?: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
