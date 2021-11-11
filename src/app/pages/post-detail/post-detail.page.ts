import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingImpl } from 'src/app/bridge/loading/loading.impl';
import { CommentModel } from 'src/app/models/comment.model';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  public post: PostModel;
  public user: UserModel;
  public comments: Array<CommentModel>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
    private readonly commentService: CommentService,
    private readonly loadingImpl: LoadingImpl,
  ) { }

  ngOnInit() {

    this.getParams();
  }

  private getParams(): void {

    this.route.queryParams.subscribe(async (data: {post: string}) => {

      this.post = JSON.parse(data.post) as PostModel;

      const loading: HTMLIonLoadingElement = await this.loadingImpl.show();
      await this.getUser(this.post.userId);
      await this.getComments(this.post.id);
      this.loadingImpl.dismiss(loading);
    });
  }

  private async getUser(userId: number): Promise<void> {

    this.user = await this.userService.getUser(userId);
  }

  private async getComments(postId: number): Promise<void> {

    this.comments = await this.commentService.getComments(postId);
  }
}
