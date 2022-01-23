import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input()
  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onProfileClick = (event: Event, index: number) => {
    this.router.navigate(['user-detail/', { id: this.users[index].$id }]);
  }
}
