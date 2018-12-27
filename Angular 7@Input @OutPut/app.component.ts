import { Component } from '@angular/core';
import { Post } from './posts/post-list/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
  storedPost: Post[] = [];
  onPostCreatd(event) {
this.storedPost.push(event);
  }
}
