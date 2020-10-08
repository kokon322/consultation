import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: IComment[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

}
