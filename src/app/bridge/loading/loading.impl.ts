import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingImpl {

    constructor(private readonly loadingController: LoadingController) {
    }

    public async show(): Promise<HTMLIonLoadingElement> {

        const loading: HTMLIonLoadingElement = await this.loadingController.create({
            cssClass: 'loading-model'
        });
        loading.present();

        return loading;
    }

    public dismiss(loading: HTMLIonLoadingElement): void {

        loading.dismiss();
    }
}
