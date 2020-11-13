import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {RegistrationService} from '../registration.service'

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
  get age(){
    return this.registrationForm.get('age')
  }

  constructor(private fb:FormBuilder,private _registrationService: RegistrationService) { }
  registrationForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: [''],
    email: ['',[Validators.required]],
    age : ['']
  })

  ngOnInit(): void {
  }
  onSubmit(){
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log("success",response),
        error => console.log("error!",error)
      );
  }

}

