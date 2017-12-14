import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  public users: any;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.fetchUsers().subscribe(data => {
      this.users = data;
    });
  }

  public deleteUser(id) {
    this._userService.deleteUser(id).subscribe();
  }

}
