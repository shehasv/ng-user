import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {RegistrationService} from '../registration.service';
import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  get firstName(){
    return this.registrationForm.get('firstName')
  }
  get lastName(){
    return this.registrationForm.get('lastName')
  }
  get email(){
    return this.registrationForm.get('email')
  }

  get password(){
    return this.registrationForm.get('password');
  } 

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword')
  }

  get age(){
    return this.registrationForm.get('age')
  }

  get question(){
    return this.registrationForm.get('question')
  }

  get answer(){
    return this.registrationForm.get('answer')
  }

  constructor(private fb:FormBuilder,private _registrationService: RegistrationService) { }
  registrationForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: [''],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
    question: ['',[Validators.required]],
    answer: ['',[Validators.required,Validators.minLength(3)]],
    age : ['',[Validators.required,Validators.min(21),Validators.max(60)]]
  },{
    validator: ConfirmedValidator('password', 'confirmPassword')
  })

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.registrationForm.value.lastName===''){
      this.registrationForm.patchValue({
        lastName: 'NA'
      })
    }
    console.log(this.registrationForm.value)
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log("success",response),
        error => console.log("error!",error)
      );
    this.registrationForm.reset();
  }
  public emailAlredyExist:boolean = false;
  emailCheck(){
    this._registrationService.emailCheckUnique(this.registrationForm.value.email)
      .subscribe(res => {
        console.log(res)
        if (res === null) {
          this.emailAlredyExist = false;
        }
        else{
          this.emailAlredyExist = true;
        }
    });
  }

}

