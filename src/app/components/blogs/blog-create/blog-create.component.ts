import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../services/blog/blog.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../services/category/category.service";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  createForm: FormGroup | any
  categories: any = []

  constructor(private blogService: BlogService, private router: Router, private fb: FormBuilder, private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: [""],
      content: [""],
      date: [""],
      user_id: [""],
      category_id: [""],
      image: [""],
    })
    this.getAllCategory()
  }
  create() {
    let user = JSON.parse(<string>localStorage.getItem("user"))
    let data = this.createForm?.value
    data.user_id = user.id
    this.blogService.create(data).subscribe(res => {
      this.router.navigate(["blogs"])
    })
  }
  getAllCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res
    })
  }
}
