import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {SubjectService} from "../../../../services/subject.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }
  save(user: IUser): void{
    this.subjectService.setUser(user);
  }

}
