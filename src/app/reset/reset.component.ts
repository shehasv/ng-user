import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  get email(){
    return this.resetForm.get('email')
  }

  get question(){
    return this.resetForm.get('question')
  }

  get answer(){
    return this.resetForm.get('answer');
  }

  constructor(private fb:FormBuilder,private _registrationService: RegistrationService,private router:Router) { }
  resetForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    question: ['',[Validators.required]],
    answer: ['',[Validators.required,Validators.minLength(3)]],
  },{
  })

  ngOnInit(): void {
  }

  public failed:boolean = false;

  onChange(){
    this.failed = false;
  }

  onSubmit(){
    console.log(this.resetForm.value)
    this._registrationService.reset(this.resetForm.value)
      .subscribe(
        response => {
          console.log(response)
          if(response.msg === "invalid" || response.msg === "failed"){
            this.resetForm.reset();
            this.failed = true;
          }
          else{
            this.router.navigate(['change',{email:response.email}],{skipLocationChange:true})
            this.resetForm.reset();
          }
          
        },
        error => console.log("error!",error)
      );
    this.resetForm.reset();
  }

}
