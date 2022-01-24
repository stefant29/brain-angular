import { UserService } from './../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;
  linkedUsers: string[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.loadUser(params['id']);
      }
    );
  }

  loadUser(id: string) {
    // this.user = new User("Mr", "Florin", "Pop",
    // ["Researcher", "Teaching Staff", "Scientific Reviewer", "Entrepreneur", "Manager", "Consultant", "Other"],
    // ["Big data", "Distributed systems", "Distributed computing", "Distributed and parallel computing", "Internet of things", "Numerical methods", "Numerical algorithms", "Numerical estimation", "Experimental and numerical modelling", "Optimization Computational physics", "Numerical modelling", "Quanum mechanics", "Relativity Optimization"],
    // "1111", "Universitatea POLITEHNICA DIN BUCURESTI",
    // "https://www.brainmap.ro/resource-c-545346-150x150-fpop.png")

    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.log(error);
        alert("error occured, check console!");
      }
    });
  }

  onLinksClick() {
    if (this.linkedUsers) {
      return;
    }

    // this.linkedUsers = ["user1", "user2", "user3", "user4"];

    this.userService.getLinks(this.user.$id).subscribe({
      next: (data) => this.linkedUsers = data,
      error: (error) => {
        console.log(error);
        alert("error occured, check console!");
      }
    });
  }
}
