import {Injectable} from '@angular/core';
import { Storage } from '@capacitor/storage';
import { LoggerImpl } from '../logger/logger.impl';

@Injectable({
  providedIn: 'root'
})
export class LocalRepository {

  constructor(private readonly logger: LoggerImpl) { }

  public async get(key: string): Promise<any> {

    try {

      const res: { value: string } = await Storage.get({ key });

      return JSON.parse(res.value);

    } catch (error) {

      this.logger.error(error);
    }
  }

  public async set(key: string, value: any): Promise<any> {

    try {

      return await Storage.set({
        key,
        value: JSON.stringify(value)
      });

    } catch (error) {

      this.logger.error(error);
    }
  }

  public async update(key: string, value: any): Promise<any> {

    return await this.set(key, value);
  }

  public async delete(key?: string): Promise<any> {

    try {

      if (key) {

        return await Storage.remove({
          key
        });
      }

      return await Storage.clear();

    } catch (error) {

      this.logger.error(error);
    }

  }
}
