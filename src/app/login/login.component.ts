import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private  route:Router, private loginservice: LoginService){}
  email: string='';
  password: string='';
  login(){
    // if(this.email==="admin@gmail.com" && this.password==="admin"){
    //   this.route.navigate(['/rooms','add'])
    // }
    if(this.loginservice.login(this.email,this.password)){
      this.route.navigate(['/rooms','add'])
    }
  }
  
}
 
