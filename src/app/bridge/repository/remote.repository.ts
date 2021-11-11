import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, Http } from '@capacitor-community/http';
import { LoggerImpl } from '../logger/logger.impl';

@Injectable({
  providedIn: 'root'
})
export class RemoteRepository {

  constructor(private readonly logger: LoggerImpl) { }

  public async get(endpoint: string, value?: any): Promise<HttpResponse> {

    try {

      const headers: HttpHeaders = this.getHeaders();

      return await Http.request({
        method: 'GET',
        headers,
        url: endpoint,
        params: value
      });

    } catch (error) {

      this.logger.error(error);
    }
  }

  public async set(endpoint: string, value: any): Promise<HttpResponse> {

    try {

      const headers: HttpHeaders = this.getHeaders();

      return await Http.request({
        method: 'POST',
        headers,
        url: endpoint,
        data: value
      });

    } catch (error) {

      this.logger.error(error);
    }

  }

  public async update(endpoint: string, value: any): Promise<HttpResponse> {

    try {

      const headers: HttpHeaders = this.getHeaders();

      return await Http.request({
        method: 'PUT',
        headers,
        url: endpoint,
        data: value
      });

    } catch (error) {

      this.logger.error(error);
    }
  }

  public async delete(endpoint?: string, value?: any): Promise<HttpResponse> {

    try {

      const headers: HttpHeaders = this.getHeaders();

      return await Http.request({
        method: 'DELETE',
        headers,
        url: endpoint,
        data: value
      });

    } catch (error) {

      this.logger.error(error);
    }
  }

  private getHeaders(): HttpHeaders {

    const header: HttpHeaders = {
      'Content-Type': 'application/json'
    };

    return header;
  }
}
