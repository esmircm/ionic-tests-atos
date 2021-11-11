import { Injectable } from '@angular/core';
import { HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';
import { LoggerImpl } from '../bridge/logger/logger.impl';
import { RemoteRepository } from '../bridge/repository/remote.repository';
import { EndpointEnum } from '../enums/endpoint.enum';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly remoteRepository: RemoteRepository,
    private readonly logger: LoggerImpl) { }

  public async getAllUsers(): Promise<Array<UserModel>> {

    let users: Array<UserModel>;

    try {

      const res: HttpResponse = await this.remoteRepository
        .get(environment.apiUrl + EndpointEnum.USERS);

      users = UserModel.deserializeArray(res.data, UserModel);

    } catch (error) {

      this.logger.error(error);
    }

    return users;
  }

  public async getUser(userId: number): Promise<UserModel> {

    let user: UserModel;

    try {

      const res: HttpResponse = await this.remoteRepository
        .get(environment.apiUrl + EndpointEnum.USERS + `/${userId}`);

      user = UserModel.deserializeObject(res.data, UserModel);

    } catch (error) {

      this.logger.error(error);
    }

    return user;
  }
}
