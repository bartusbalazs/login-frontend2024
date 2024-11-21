import { Injectable } from '@angular/core';
import { Team } from '../teams/model/team.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamsUrl = 'api/teams'; // URL to web api


  constructor(private http: HttpClient) { }



  getTeams(): Observable<Team[]> {
   return this.http.get<Team[]>(this.teamsUrl)
  }


}
