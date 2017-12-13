import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit, OnDestroy {

  private usersSubscription: Subscription;
  public users: any;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.usersSubscription = this._userService.fetchUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  public deleteUser(id) {
    console.log(id);
    this._userService.deleteUser(id).subscribe();
  }

}
