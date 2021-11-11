import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LoadingImpl } from 'src/app/bridge/loading/loading.impl';
import { PostModel } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent implements OnInit {

  @Input() post: PostModel;
  public formPost: FormGroup;
  public titleModal: string;

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private readonly loadingImpl: LoadingImpl,
    private readonly postService: PostService,
  ) { }

  ngOnInit() {

    this.detectUpdateOrCreatePost();
  }

  public async savePost(): Promise<void> {

    const loading: HTMLIonLoadingElement = await this.loadingImpl.show();

    let post: PostModel;

    if (this.post){

      post = await this.postService.updatePost(
        this.post.id,
        this.formPost.controls.title.value,
        this.formPost.controls.body.value,
        this.post.userId
      );

    } else {

      post = await this.postService.createPost(
        this.formPost.controls.title.value,
        this.formPost.controls.body.value,
        1
      );
    }

    this.loadingImpl.dismiss(loading);
    this.modalController.dismiss(post);
  }

  private detectUpdateOrCreatePost(): void {

    if (this.post) {

      this.titleModal = 'Edit Post';
      this.initForm(this.post.title, this.post.body);

    } else {

      this.titleModal = 'Create Post';
      this.initForm('', '');
    }
  }

  private initForm(title: string, body: string): void {

    this.formPost = this.formBuilder.group({
      title: [title, Validators.required],
      body: [body, Validators.required]
    });
  }

}
