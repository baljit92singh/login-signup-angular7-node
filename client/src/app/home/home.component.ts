import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.data = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.data);
    // return this.data;
  }

  logoutData() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'])
  }
}
