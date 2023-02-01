export interface Post {
  id: string;
  title: string;
  content: string;
  imageURL: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface Posts {
  posts: Post[];
}
