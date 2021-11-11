import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {

  @Input() public post: PostModel;
  @Input() public showEdit: boolean;
  @Output() public edit: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }
}
