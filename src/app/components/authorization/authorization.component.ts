import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SignInService } from 'src/app/service/signIn.service';
import { SignInDto } from 'src/app/model/signIn-dto';
import { Router } from '@angular/router';
import { SignUpDto } from 'src/app/model/signUp-dto';

declare var $: any;

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  usernameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('.info-item .btn').click(() => {
        $('.container').toggleClass('log-in');
      });
      $('.container-form .btn').click(() => {
        $('.container').addClass('active');
      });
    });
  }

  signin() {
    if (this.emailControl.valid && this.passwordControl.valid) {
      const signInModel = new SignInDto();
      signInModel.Password = this.passwordControl.value;
      signInModel.UserName = this.emailControl.value;
      signInModel.RememberMe = true;
      this.signInService.signIn(signInModel).subscribe(() => this.router.navigate(['/main']));
    }
  }
  signup() {
    if (this.emailControl.valid && this.passwordControl.valid && this.usernameControl.valid) {
      const signUpModel = new SignUpDto();
      signUpModel.Password = this.passwordControl.value;
      signUpModel.UserName = this.usernameControl.value;
      signUpModel.Email = this.emailControl.value;
      this.signInService.signUp(signUpModel).subscribe(() => this.router.navigate(['/main']));
    }
  }
}
