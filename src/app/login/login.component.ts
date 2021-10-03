import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.hide = true;
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }
    );
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(['/Home']);
    }
  }

}
