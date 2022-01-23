import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit(): void { }

  onSearch = () => {
    this.users = [
      new User("Mr", "Florin", "Pop",
        ["Researcher", "Teaching Staff", "Scientific Reviewer", "Entrepreneur", "Manager", "Consultant", "Other"],
        ["Big data", "Distributed systems", "Distributed computing", "Distributed and parallel computing", "Internet of things", "Numerical methods", "Numerical algorithms", "Numerical estimation", "Experimental and numerical modelling", "Optimization Computational physics", "Numerical modelling", "Quanum mechanics", "Relativity Optimization"],
        "1111", "Universitatea POLITEHNICA DIN BUCURESTI",
        "https://www.brainmap.ro/resource-c-545346-150x150-fpop.png"),
      new User("Ms", "Florina", "Raicu", [],
        ["Reproductive medicine", "population genetics", "RARE DISEASES", "Neurogenetics", "Molecular genetics", "Ancient DNA"],
        "999", "Universitatea de medicina si farmacie \"CAROL DAVILA\"",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"),
      new User("Mr", "FLORIN DAN", "POPESCU", [], [], "2222", "UNIVERSITATEA DE MEDICINA SI FARMACIE \"CAROL DAVILA\""),
    ]
  }

}
