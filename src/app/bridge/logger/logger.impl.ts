// TODO: logger que puede ser remplazado por cualquier sistema de log

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerImpl {

  constructor() {
  }

  public debug(message: string, obj?: any): void {

    console.debug(message, obj);
  }

  public warning(message: string, obj?: any): void {

    console.warn(message, obj);
  }

  public error(message: string, obj?: any): void {

    console.error(message, obj);
  }
}
