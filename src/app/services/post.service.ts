import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostServiceInterface } from './post.service.interface';
import { Post } from '../components/shared/model/post';
import {baseUrl, postUrl} from '../config/api';
import {Newpost} from "../components/shared/interfaces/newpost.interface";

@Injectable({
  providedIn: 'root',
})
export class PostService implements PostServiceInterface {
  constructor(private httpClient: HttpClient) {}

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(postUrl);
  }
  addPost(newPost: Newpost): Observable<Newpost> {
    return this.httpClient.post<any>(`${baseUrl}` + '/posts', newPost);
  }
  updatePost(postToUpdate: Post): Observable<string> {
    return this.httpClient.put<string>('/api/post', postToUpdate);
  }
  deletePost(postId: string): Observable<string> {
    return this.httpClient.delete<string>('/api/post/' + postId);
  }
}
