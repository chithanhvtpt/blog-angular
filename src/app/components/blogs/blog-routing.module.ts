import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogCreateComponent} from "./blog-create/blog-create.component";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";

const routes: Routes = [
  {
    path: "blogs", children: [
      {
        path: "", component: BlogListComponent
      },
      {
        path: "create", component: BlogCreateComponent
      },
      {
        path: ":id", component: BlogDetailComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
