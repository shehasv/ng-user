import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }
  constructor(private fb:FormBuilder, private _registrationService:RegistrationService, private router:Router) { }
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  })
  ngOnInit(): void {
  }

  public failed:boolean = false;
  public wrongPass:boolean = false;

  onChange(){
    this.failed = false;
    this.wrongPass = false;
  }

  onSubmit(){
    console.log(this.loginForm.value)
    this._registrationService.login(this.loginForm.value)
      .subscribe(
        response =>{
          console.log(response)
          if(response.msg === "invalid"){
            this.loginForm.reset();
            this.failed = true;
          }
          else if(response.msg === "failed"){
            this.loginForm.patchValue({email: this.loginForm.get('email').value,password:''});
            this.wrongPass = true;
          }
          else{
            localStorage.setItem('userLogged', "true");
            localStorage.setItem('id', response.id);
            this.router.navigate(['userList'])
            window.location.reload();
            this.loginForm.reset();
          }
        },
        error => console.log("error!",error)
      );
  }

}
