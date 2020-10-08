import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../app/services/subject.service';
import {IUser} from '../../app/modules/user/interfaces';
import {IPost} from '../../app/modules/post/interfaces';
import {IComment} from '../../app/modules/comment/interfaces';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  userData: Partial<IUser>;
  postData: Partial<IPost>;
  commentData: Partial<IComment>;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.userData = this.subjectService.getUser();
    this.postData = this.subjectService.getPost();
    this.commentData = this.subjectService.getComment();
  }

}
