import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {TournamentGroup} from '../tournament-groups/model/tournament-group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupsUrl = 'api/groups'; // URL to web api


  constructor(private http: HttpClient) { }



  getGroups(): Observable<TournamentGroup[]> {
   return this.http.get<TournamentGroup[]>(this.groupsUrl)
  }


}
