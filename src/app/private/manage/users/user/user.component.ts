import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { UserService } from '../../../../_services/user.service';
import { User } from '../../../../_models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  public user: User;
  private _editUser: Boolean = false;
  private _id: string = null;

  constructor(private _userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    if (this.route.snapshot.params['id']) {
      this.getExistingUser();
      this._editUser = true;
    }
  }

  private getExistingUser() {
    this._id = this.route.snapshot.params['id'];
    this._userService.fetchUser(this._id).subscribe((user: User) => {
      this.user = user;
    });
  }

  public onSubmit() {
    if (this._editUser) {
      this._userService.updateUser(this.user).subscribe((user: User) => {
        this.user = user;
      });
    } else {
      this._userService.addUser(this.user).subscribe();
    }
    this.router.navigateByUrl('/dashboard/manage/users');
  }

}
