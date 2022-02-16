import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./components/layouts/master/master.component";
import {LoginRegisterComponent} from "./components/pages/login-register/login-register.component";

const routes: Routes = [
  {
    path: "", component: MasterComponent,
    loadChildren: () => import("./components/blogs/blog.module").then(module => module.BlogModule)
  },
  {
    path: "auth", component: LoginRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
