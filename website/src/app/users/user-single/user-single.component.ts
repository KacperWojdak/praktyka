import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
user = <any>[]
  constructor(
    private UserService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];

    this.UserService
    .getUser(username)
    .subscribe(user => this.user = user);
  });
  }

}
