import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginService} from './login/service/login.service';
import {LoginComponent} from './login/login.component';
import {TeamsComponent} from './teams/teams.component';
import {TournamentGroupsComponent} from './tournament-groups/tournament-groups.component';
import {Role} from './login/model/role';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, TeamsComponent, TournamentGroupsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-frontend';
  constructor(public loginService:LoginService) {
  }

  protected readonly Role = Role;
}
