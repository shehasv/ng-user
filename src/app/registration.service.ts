import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  _url = "http://localhost:9000/users";
  get_url = "http://localhost:9000/user";
  checkMail = "http://localhost:9000/mail";
  loginUrl = "http://localhost:9000/login";
  resetUrl = "http://localhost:9000/reset";
  updatePassurl = "http://localhost:9000/updatePass";
  
  constructor(private _http: HttpClient) { }
  register(userData){
    return this._http.post<user>(this._url,userData);
  }
  update(userData){
    let newUrl = this._url+`?id=${userData.id}`
    return this._http.patch(newUrl,userData)
  }
  getDetail(userData){
    console.log(this.get_url+`?id=${userData.id}`)
    return this._http.get<user>(this.get_url+`?id=${userData.id}`);
  }
  delete(id){
    let newUrl = this._url+`?id=${id.idDel}`;
    console.log(newUrl)
    return this._http.delete(newUrl)
  }
  emailCheckUnique(email){
    // console.log(this.checkMail+`?mail=${email}`)
    return this._http.get(this.checkMail+`?mail=${email}`)
  }

  login(data){
    return this._http.post<{msg:string,id:string}>(this.loginUrl,data);
  }

  reset(data){
    return this._http.post<{msg:string,email:string}>(this.resetUrl,data);
  }

  updatePassword(data){
    return this._http.patch(this.updatePassurl,data);
  }

}
