import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces';
import {UserService} from '../../services';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users$: Observable<IUser[]>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUser();
  }

}
