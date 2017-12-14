import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TeamMemberService } from '../../../../_services/team-member.service';
import { TeamMember } from '../../../../_models/team-member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
  providers: [TeamMemberService]
})
export class TeamMemberComponent implements OnInit {

  private _id: string;
  private _edit: Boolean = false;
  public member: TeamMember;


  constructor(private _teamMemberService: TeamMemberService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.member = new TeamMember();
    if (this.route.snapshot.params['id']) {
      this.getExisting();
      this._edit = true;
    }

  }


  /*
    -------------------
    PUBLIC FUNCTIONS
    -------------------
  */

  public onSubmit() {
    if (this._edit) {
      this._teamMemberService.updateTeamMember(this.member).subscribe((data: TeamMember) => {
        this.member = data;
      });
    } else {
      this._teamMemberService.addTeamMember(this.member).subscribe((data: TeamMember) => {
        this.member = data;
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
    this._teamMemberService.fetchTeamMember(this._id).subscribe((data: TeamMember) => {
      this.member = data;
    });
  }

}
