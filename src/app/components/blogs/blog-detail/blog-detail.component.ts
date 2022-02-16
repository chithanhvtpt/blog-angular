import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../services/blog/blog.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CommentService} from "../../../services/comment/comment.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../services/category/category.service";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  id: any
  blog: any
  comments: any = []
  commentForm: FormGroup | any
  categories: any = []

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, private commentService: CommentService, private fb: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get("id")
      this.getById(this.id)
      this.getAllComment(this.id)
      let user = JSON.parse(<string>localStorage.getItem("user"))
      this.commentForm = this.fb.group({
        content: [""],
        user_id: [user.id],
        blog_id: [this.id]
      })
      this.getAllCategory()
    })

  }
  getById(id: any) {
    this.blogService.getById(id).subscribe(res => {
      this.blog = res
    })
  }
  getAllComment(id: any) {
    this.commentService.getAllComment(id).subscribe(res => {
      this.comments = res
    })
  }
  submitComment() {
    let data = this.commentForm?.value
    this.commentService.comment(data).subscribe(res => {
    })
  }
  getAllCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res
    })
  }

}
