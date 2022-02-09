import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  contactEmail="";

  password="";

  constructor(private login:LoginService) {

   console.warn(this.login.getData())

    this.contactEmail=this.login.getData().email

    this.password=this.login.getData().password

   }

  ngOnInit(): void {
  }




}
