import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brain';

  constructor(
    private router: Router
  ) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
