import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { TeamMemberService } from '../../../../_services/team-member.service';
import { TeamMember } from '../../../../_models/team-member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
  providers: [TeamMemberService]
})
export class TeamMemberComponent implements OnInit, OnDestroy {

  private _id: string;
  private _edit: Boolean = false;
  public member: TeamMember;
  private subsciption: Subscription;
  private subscriptionActive: Boolean = false;


  constructor(private _teamMemberService: TeamMemberService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.member = new TeamMember();
    if (this.route.snapshot.params['id']) {
      this.getExisting();
      this._edit = true;
    }

  }


  ngOnDestroy() {
    if (this.subscriptionActive) {
      this.subsciption.unsubscribe();
    }
  }


  /*
    -------------------
    PUBLIC FUNCTIONS
    -------------------
  */

  public onSubmit() {
    if (this._edit) {
      this.subsciption = this._teamMemberService.updateTeamMember(this.member).subscribe((data: TeamMember) => {
        this.member = data;
        this.subscriptionActive = true;
      });
    } else {
      this._teamMemberService.addTeamMember(this.member).subscribe((data: TeamMember) => {
        this.member = data;
        this.subscriptionActive = true;
      });
    }

    this.router.navigateByUrl('/dashboard/manage/team-members');
  }



  /*
    -------------------
    PRIVATE FUNCTIONS
    -------------------
  */

  private getExisting() {
    this._id = this.route.snapshot.params['id'];
    this.subsciption = this._teamMemberService.fetchTeamMember(this._id).subscribe((data: TeamMember) => {
      this.member = data;
    });
    this.subscriptionActive = true;
  }

}
