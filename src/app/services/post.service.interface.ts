import { Post } from '../components/shared/model/post';
import { Observable } from 'rxjs';
import {Newpost} from "../components/shared/interfaces/newpost.interface";

export interface PostServiceInterface {
  getPost(): Observable<Post[]>;

  addPost(newPost: Newpost): Observable<Newpost>;

  updatePost(postToUpdate: Post): Observable<string>;

  deletePost(PostId: string): Observable<string>;
}
