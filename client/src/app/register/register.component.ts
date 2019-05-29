import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../common-service/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    public commonService: CommonService
  ) {
    this.loadForm();
  }
  loadForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      date_of_birth: ['', Validators.required]
    })
  }
  registerData() {
    let item = {
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      date_of_birth: this.registerForm.controls['date_of_birth'].value,
      password: this.registerForm.controls['password'].value
    }
    this.commonService.registerUser(item)
      .subscribe(res => {
        if (res.code === 200) {
          this.snackBar.open(res.message, 'Dismiss', { duration: 3000 });
          this.router.navigate(['/login'])
        } else {
          this.snackBar.open(res.message, 'Dismiss', { duration: 3000 });
        }
      })
  }
  ngOnInit() {
  }

}
