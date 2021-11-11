import { Injectable } from '@angular/core';
import { HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';
import { LoggerImpl } from '../bridge/logger/logger.impl';
import { RemoteRepository } from '../bridge/repository/remote.repository';
import { EndpointEnum } from '../enums/endpoint.enum';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private readonly remoteRepository: RemoteRepository,
    private readonly logger: LoggerImpl) { }

  public async getComments(postId: number): Promise<Array<CommentModel>> {

    let comments: Array<CommentModel>;

    try {

      const res: HttpResponse = await this.remoteRepository
        .get(environment.apiUrl + EndpointEnum.POSTS + `/${postId}` + EndpointEnum.COMMENTS);

      comments = CommentModel.deserializeArray(res.data, CommentModel);

    } catch (error) {

      this.logger.error(error);
    }

    return comments;
  }
}
