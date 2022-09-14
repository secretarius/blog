import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../shared/model/post';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent implements OnInit {
  constructor(private postService: PostService) {}

  postsList: Post[] = [];

  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts() {
    this.postService.getPost().subscribe((post) => {
      console.log(post);
      this.postsList = post;
    });
  }
}
