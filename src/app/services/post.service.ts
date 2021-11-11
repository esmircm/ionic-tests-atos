import { Injectable } from '@angular/core';
import { HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';
import { LoggerImpl } from '../bridge/logger/logger.impl';
import { RemoteRepository } from '../bridge/repository/remote.repository';
import { EndpointEnum } from '../enums/endpoint.enum';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly remoteRepository: RemoteRepository,
    private readonly logger: LoggerImpl) { }

  public async getAllPosts(): Promise<Array<PostModel>> {

    let posts: Array<PostModel>;

    try {

      const res: HttpResponse = await this.remoteRepository
        .get(environment.apiUrl + EndpointEnum.POSTS);

      posts = PostModel.deserializeArray(res.data, PostModel);

    } catch (error) {

      this.logger.error(error);
    }

    return posts;
  }

  public async getPostsByUser(userId: number): Promise<Array<PostModel>> {

    let posts: Array<PostModel>;

    try {

      const res: HttpResponse = await this.remoteRepository
        .get(environment.apiUrl + EndpointEnum.POSTS, { userId });

      posts = PostModel.deserializeArray(res.data, PostModel);

    } catch (error) {

      this.logger.error(error);
    }

    return posts;
  }

  public async createPost(title: string, body: string, userId: number): Promise<PostModel> {

    let post: PostModel;

    try {

      const res: HttpResponse = await this.remoteRepository
        .set(environment.apiUrl + EndpointEnum.POSTS, { title, body, userId });

      post = PostModel.deserializeObject(res.data, PostModel);

    } catch (error) {

      this.logger.error(error);
    }

    return post;
  }

  public async updatePost(id: number, title: string, body: string, userId: number): Promise<PostModel> {

    let post: PostModel;

    try {

      const res: HttpResponse = await this.remoteRepository
        .update(environment.apiUrl + EndpointEnum.POSTS + `/${id}`, { id, title, body, userId });

      post = PostModel.deserializeObject(res.data, PostModel);

    } catch (error) {

      this.logger.error(error);
    }

    return post;
  }
}
