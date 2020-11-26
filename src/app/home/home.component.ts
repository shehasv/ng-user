import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {RegistrationService} from '../registration.service'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users = [];
  public errorMessage = '';
  public count = '';


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

  constructor(private fb:FormBuilder,private _registrationService: RegistrationService, private _userService:UsersService) { }
  updateForm = this.fb.group({
    id: ['',[Validators.required]],
    firstName: ['',[Validators.required]],
    lastName: [''],
    email: ['',[Validators.required]],
    age : ['']
  })

  ngOnInit(): void {
  }


  onClick(){
    this._userService.getUsers()
      .subscribe(data => {
        this.users = data
        console.log(data)
        if(data.length <=0 ){
          this.count = '0'
        }
        })
  }
  showModal: boolean;
  uderId:string ;
  show(id)
  {
    this.showModal = true; // Show-Hide Modal Check
    console.log(id)
    this.uderId = id;  
    this.updateForm.patchValue({id:this.uderId});
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
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
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
