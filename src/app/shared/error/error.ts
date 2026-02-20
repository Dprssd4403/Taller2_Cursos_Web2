import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.html',
  styleUrls: ['./error.css']
})
export class Error {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }
}