import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { PostsPage } from './posts.page';
import { PostsPageRoutingModule } from './posts-routing.module';
import { MessageComponentModule } from '../../message/message.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    PostsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PostsPage]
})
export class PostsPageModule {}
