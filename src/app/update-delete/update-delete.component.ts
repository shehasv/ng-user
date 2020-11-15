import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {RegistrationService} from '../registration.service'
import { user } from '../user';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {

  get id(){
    return this.updateForm.get('id')
  }
  get firstName(){
    return this.updateForm.get('firstName')
  }
  get lastName(){
    return this.updateForm.get('lastName')
  }
  get email(){
    return this.updateForm.get('email')
  }
  get age(){
    return this.updateForm.get('age')
  }
  

  get idDel(){
    return this.registrationForm.get('idDel')
  }


  constructor(private fb:FormBuilder,private _registrationService: RegistrationService) { }
  updateForm = this.fb.group({
    id: ['',[Validators.required]],
    firstName: ['',[Validators.required]],
    lastName: [''],
    email: ['',[Validators.required]],
    age : ['']
  })

  registrationForm = this.fb.group({
    idDel: ['',[Validators.required]],

  })

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.registrationForm.value)
    this._registrationService.delete(this.registrationForm.value)
      .subscribe(
        response => console.log("success",response),
        error => console.log("error!",error)
      );
      this.registrationForm.reset();
  }
  getDetails(){
    this._registrationService.getDetail(this.updateForm.value)
      .subscribe(
        data => {
          this.updateForm.patchValue({
            firstName : data.fName,
            lastName: data.lName,
            email: data.email,
            age: data.age
          })
        }
      )
  }
  update(){
    this._registrationService.update(this.updateForm.value)
      .subscribe(
        response => console.log("success",response),
        error => console.log("error!",error)
      );
      this.updateForm.reset();
  }

}
