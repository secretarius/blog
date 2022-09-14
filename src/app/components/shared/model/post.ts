export class Post {
  id: string;
  createdDate: string;
  updatedDate: string;
  title: string;
  content: string;
  imageUrl: string;
  likesCount: string;
  isLikedByCurrentUser: boolean;

  constructor(
    id: string,
    createdDate: string,
    updatedDate: string,
    title: string,
    content: string,
    imageUrl: string,
    likesCount: string,
    isLikedByCurrentUser: boolean
  ) {
    this.id = id;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.title = title;
    this.content = content;
    this.imageUrl = imageUrl;
    this.likesCount = likesCount;
    this.isLikedByCurrentUser = isLikedByCurrentUser;
  }
}
