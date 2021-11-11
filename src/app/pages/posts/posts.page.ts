import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoadingImpl } from 'src/app/bridge/loading/loading.impl';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { PostModalComponent } from '../../components/post-modal/post-modal.component';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss'],
})
export class PostsPage implements OnInit {

  public posts: Array<PostModel>;
  public users: Array<UserModel>;

  constructor(public router: Router,
    private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly loadingImpl: LoadingImpl,
    private readonly modalController: ModalController) { }

  ngOnInit() {

    this.getPosts();
    this.getUsers();
  }

  public async viewPostDetail(post: PostModel): Promise<void> {

    const postNavigationExtras: NavigationExtras = {
      queryParams: {
        post: JSON.stringify(post)
      }
    };

    this.router.navigate(['/post-detail'], postNavigationExtras);
  }

  public async createPost(): Promise<void> {

    const modal = await this.modalController.create({
      component: PostModalComponent
    });

    await modal.present();

    const modalResult: OverlayEventDetail<PostModel> = await modal.onWillDismiss();

    if (modalResult.data) {

      this.posts.unshift(modalResult.data);
    }
  }

  public async editPost(post: PostModel): Promise<void> {
    const modal = await this.modalController.create({
      component: PostModalComponent,
      componentProps: {
        post
      }
    });

    await modal.present();

    const modalResult: OverlayEventDetail<PostModel> = await modal.onWillDismiss();

    if (modalResult.data) {

      const objIndex = this.posts.findIndex((obj => obj.id === modalResult.data.id));
      this.posts[objIndex] = modalResult.data;
    }
  }

  public async getPostsByUser(event: CustomEvent): Promise<void> {

    const loading: HTMLIonLoadingElement = await this.loadingImpl.show();

    const userId: number = event.detail.value;

    this.posts = await this.postService.getPostsByUser(userId);

    this.loadingImpl.dismiss(loading);
  }

  public refresh(event: CustomEvent): void {

    this.getPosts();
    event.detail.complete();
  }

  private async getPosts(): Promise<void> {

    const loading: HTMLIonLoadingElement = await this.loadingImpl.show();

    this.posts = await this.postService.getAllPosts();

    this.loadingImpl.dismiss(loading);
  }

  private async getUsers(): Promise<void> {

    this.users = await this.userService.getAllUsers();
  }
}
