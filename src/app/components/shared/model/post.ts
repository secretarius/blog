import {Newpost} from "../interfaces/newpost.interface";
import {v4 as uuidv4} from "uuid";

export class Post {
  id: string;
  createdDate: string;
  updatedDate: string;
  title: string;
  content: string;
  imageUrl: string;
  likesCount: string;
  isLikedByCurrentUser: boolean;

  constructor(post: Newpost
    // id: string,
    // createdDate: string,
    // updatedDate: string,
    // title: string,
    // content: string,
    // imageUrl: string,
    // likesCount: string,
    // isLikedByCurrentUser: boolean
  ) {
    this.id = this.randomId();
    this.createdDate = post.createdDate;
    this.updatedDate = post.updatedDate;
    this.title = post.title;
    this.content = post.content;
    this.imageUrl = post.imageUrl;
    this.likesCount = post.likesCount;
    this.isLikedByCurrentUser = post.isLikedByCurrentUser;
  }
  randomId(): string {
    return uuidv4();
  }
}
