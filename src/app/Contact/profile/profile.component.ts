import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactDetails } from 'src/shared/contact-details';
import { baseUrl } from 'src/shared/baseUrl';
import { ContactinfoComponent } from '../contactinfo/contactinfo.component';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  contactArray: ContactDetails[];
  errMsg: any;


  constructor(private httpservice: ContactService, private contactserice: ContactService,private _router: Router) { 
    
  }

  ngOnInit(): void {
    this.getContact();
  }


  //  getContact(){
  //    this.httpservice.get<any []>(baseUrl+'api/User/GetContacts')
  //  .subscribe(response => { console.log(response);this.contactArray=response  });
  // }

  getContact() {
    this.httpservice.getAllContact()
      .subscribe(res => {

        this.contactArray = res;
      });
  }

  deleteContact(value:any){
    return this.httpservice.deleteContactById(value)
    .subscribe(data=>{
      alert(data.toString());
      this.getContact();
    });
  }
  

}
