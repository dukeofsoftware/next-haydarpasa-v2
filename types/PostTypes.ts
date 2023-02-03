export interface Post {
  id: string;
  title: string;
  content: string;
  imageURL: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface Posts {
  posts: Post[];
}
