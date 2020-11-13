import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  _url = "http://localhost:9000/users";
  constructor(private _http: HttpClient) { }
  register(userData){
    return this._http.post<user>(this._url,userData);
  }
  update(userData){
    let newUrl = this._url+`?id=${userData.id}`
    return this._http.patch(newUrl,userData)
  }
  delete(id){
    let newUrl = this._url+`?id=${id.idDel}`;
    console.log(newUrl)
    return this._http.delete(newUrl)
  }
}
