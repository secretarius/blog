import { Component } from '@angular/core';
import { User } from './components/shared/model/user';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUser!: User;
  title = 'shop';

  constructor() {}
}
