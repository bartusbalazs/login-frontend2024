import { Component, Input, OnInit } from '@angular/core';
import { Team } from './model/team.model';
import { TeamService } from '../services/team.service';


@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];


  constructor(private teamService: TeamService) {} //Inject service

  ngOnInit(): void {
    this.initTeams();
  }

  initTeams(): void {
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
  }


}
