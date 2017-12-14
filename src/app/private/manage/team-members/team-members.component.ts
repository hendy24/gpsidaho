import { Component, OnInit } from '@angular/core';

import { TeamMember } from '../../../_models/team-member';
import { TeamMemberService } from '../../../_services/team-member.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
  providers: [TeamMemberService]
})
export class TeamMembersComponent implements OnInit {

  public teamMembers: any;

  constructor(private _teamMemberService: TeamMemberService) { }

  ngOnInit() {
    // get all the current team members
    this._teamMemberService.fetchTeamMembers().subscribe((data: TeamMember) => this.teamMembers = data);
  }


  public deleteTeamMember(id) {
    this._teamMemberService.deleteTeamMember(id).subscribe();
  }

}
