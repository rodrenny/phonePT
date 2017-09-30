import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  }
  error = null;

  constructor( private session: SessionService, private router: Router ) { }

  ngOnInit() {
  }

  submitLogin() {
    this.session.login(this.user)
      .subscribe(
        (data) => {
        this.router.navigate(['/phones'])
      },(err) => {
        this.error = err;
      }
    )
  }
}
