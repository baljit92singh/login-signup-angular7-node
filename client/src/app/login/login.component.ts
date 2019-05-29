import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../common-service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    public commonService: CommonService
  ) {
    this.loadForm();
  }
  loadForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  loginData() {
    let item = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }
    console.log(item);
    this.commonService.loginUser(item)
      .subscribe(res => {
        if (res.code === 200) {
          localStorage.setItem('currentUser', JSON.stringify(res.result));
          this.router.navigate(['/home']);
          this.snackBar.open(res.message, 'Dismiss', { duration: 3000 });
        } else {
          this.snackBar.open(res.message, 'Dismiss', { duration: 3000 });
          return false;
        }
      });
  }

  ngOnInit() {
  }

}