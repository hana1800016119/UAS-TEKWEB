import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router
  ) { }
  data: any = {};

  ngOnInit(): void {
  }
  masuk(data: { username: string; password: string; }) {
    // tslint:disable-next-line: triple-equals
    if ((data.username == 'admin') && (data.password == 'admin')) {
      this.router.navigate(['/index']);
    }
  }
}
