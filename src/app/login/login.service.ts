import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedin: boolean= false;

  constructor() { }
  login(email: string ,password:string){
    if(email==="admin@gmail.com" && password==="admin"){
      this.isLoggedin= true
    }
    return this.isLoggedin;
  }
}
