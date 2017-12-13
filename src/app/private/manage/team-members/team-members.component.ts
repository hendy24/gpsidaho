import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subsciption } from 'rxjs/Subscription';

import { TeamMember } from '../../../_models/team-member';
import { TeamMemberService } from '../../../_services/team-member.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
  providers: [TeamMemberService]
})
export class TeamMembersComponent implements OnInit, OnDestroy {

  public teamMembers: any;
  private teamMemberSubscription: Subsciption;

  constructor(private _teamMemberService: TeamMemberService) { }

  ngOnInit() {
    // get all the current team members
    this.teamMemberSubscription = this._teamMemberService.fetchTeamMembers().subscribe((data: TeamMember) => this.teamMembers = data);
  }

  ngOnDestroy() {
    this.teamMemberSubscription.unsubscribe();
  }

}
