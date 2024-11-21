import { Component, OnInit } from '@angular/core';
import {GroupService} from '../services/group.service';
import {TournamentGroup} from './model/tournament-group.model';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [],
  templateUrl: './tournament-groups.component.html',
  styleUrls: ['./tournament-groups.component.css']
})
export class TournamentGroupsComponent implements OnInit {

  groups!:TournamentGroup[];

  constructor(private groupService:GroupService) {
  }

  ngOnInit(): void {
    this.initGroups();
  }

  initGroups(): void {
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

}
