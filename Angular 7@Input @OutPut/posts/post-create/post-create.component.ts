import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post-list/post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enterdTitle = '';
  enterdDescription = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }
  ngOnInit() {
  }

onAddPost(form: NgForm) {
  if ( form.invalid) {
    return;
  }
  const post: Post = {
    title: this.enterdTitle,
    content: this.enterdDescription
  };
  console.log('post', post);
  this.postCreated.emit(post);
}
}
