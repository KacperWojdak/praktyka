import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = <any>[]
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.users = this.UserService.getUsers()
    }
  }
