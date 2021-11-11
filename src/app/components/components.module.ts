import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthorComponent } from './author/author.component';
import { CommentsComponent } from './comments/comments.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { PostComponent } from './post/post.component';


@NgModule({
    declarations: [
        PostComponent,
        AuthorComponent,
        CommentsComponent,
        PostModalComponent
    ],
    exports: [
        PostComponent,
        AuthorComponent,
        CommentsComponent
    ],
    entryComponents: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
