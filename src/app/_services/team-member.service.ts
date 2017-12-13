import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TeamMember } from '../_models/team-member';

@Injectable()
export class TeamMemberService {

  constructor(private _http: HttpClient) { }

  public fetchTeamMembers() {
    return this._http.get('/api/team-members');
  }
}
