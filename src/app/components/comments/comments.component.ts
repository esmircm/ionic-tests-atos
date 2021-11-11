import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() public comments: Array<CommentModel>;

  constructor() { }

  ngOnInit() {}

}
