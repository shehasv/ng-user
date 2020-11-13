import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users = [];


  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    
  }
  onClick(){
    this._userService.getUsers()
      .subscribe(data => {
        // console.log(data)
        this.users = data
        })
  }

}
