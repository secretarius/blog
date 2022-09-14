import { Component, Input } from '@angular/core';
import { Post } from '../../../shared/model/post';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent {
  @Input() post!: Post;
  faThumbsUp = faThumbsUp;

  constructor() {}
}
