import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 _url=  'http://localhost:3000/enroll';
 //_url='';
  constructor(private _http:HttpClient) { }

    registerForm(userdata: any){
   return this._http.post<any>(this._url,userdata);
  }
}
