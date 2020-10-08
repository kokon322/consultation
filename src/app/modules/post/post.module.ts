import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import {PostService} from "./services";
import {ShareModule} from "../../../share/share.module";


@NgModule({
  declarations: [AllPostsComponent, PostComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
        HttpClientModule,
        ShareModule
    ],
  providers: [PostService]
})
export class PostModule { }
