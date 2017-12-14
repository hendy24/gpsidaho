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

  public fetchTeamMember(id) {
    return this._http.get('/api/team-members/' + id);
  }

  public updateTeamMember(data) {
    return this._http.put('/api/team-members/' + data._id, data);
  }

  public addTeamMember(data) {
    return this._http.post('/api/team-members/add-team-member', data);
  }

  public deleteTeamMember(id) {
    return this._http.delete('/api/team-members/' + id);
  }
}
