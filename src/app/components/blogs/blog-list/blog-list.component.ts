import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../services/blog/blog.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogService) { }
  blogs: any = []

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.blogService.getAll().subscribe(res => {
      this.blogs = res
    })
  }


}
