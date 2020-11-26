import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  loggedValue:string = localStorage.getItem('userLogged');
  
  logged:boolean;
  constructor() { }

  ngOnInit(): void {
    if(this.loggedValue === "true"){
      this.logged = true;
    }
  }


  showModal: boolean;
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  
  

}
