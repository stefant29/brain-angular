import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input()
  users: User[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  onProfileClick = (event: Event, index: number) => {
    this.router.navigate(['user-detail'], { queryParams: { id: this.users[index].$id } });
  }
}
