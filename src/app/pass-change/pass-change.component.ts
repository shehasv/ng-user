import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
import {RegistrationService} from '../registration.service';
import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.css']
})
export class PassChangeComponent implements OnInit {

  get email(){
    return this.resetForm.get('email');
  }
  get password(){
    return this.resetForm.get('password');
  } 

  get confirmPassword(){
    return this.resetForm.get('confirmPassword')
  }

  constructor(private fb:FormBuilder,private _registrationService: RegistrationService,public router:Router, public route:ActivatedRoute) { }
  resetForm = this.fb.group({
    email: [this.route.snapshot.paramMap.get('email')],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
  },{
    validator: ConfirmedValidator('password', 'confirmPassword')
  })
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.resetForm.value)
      this._registrationService.updatePassword(this.resetForm.value)
      .subscribe(
        response =>{
          console.log(response)
          this.router.navigate(['login']);
        },
        error =>{
          console.log(error)
        }
      )
  }

}
