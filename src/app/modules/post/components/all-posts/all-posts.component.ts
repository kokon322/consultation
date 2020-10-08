import { Component, OnInit } from '@angular/core';
import {IPost} from '../../interfaces';
import {PostService} from '../../services';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: IPost[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(value => this.posts = value);
  }

}
