import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogCreateComponent} from "./blog-create/blog-create.component";
import {BlogUpdateComponent} from "./blog-update/blog-update.component";
import {MasterComponent} from "../layouts/master/master.component";
import {HeaderComponent} from "../layouts/header/header.component";
import {FooterComponent} from "../layouts/footer/footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogCreateComponent,
    BlogUpdateComponent,
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
