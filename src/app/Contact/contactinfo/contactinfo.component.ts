import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { baseUrl } from 'src/shared/baseUrl';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {

  val = {
    contactName:'',
    contactNumber:0,
    contactEmail:'',
    contactAddress:''

  }

  constructor(private httpservice: HttpClient) { }

  ngOnInit(): void {

  }


  addContact(form: NgForm) {

    console.log(this.val);
    this.httpservice.post(baseUrl+'api/User/AddContact',this.val )
    .subscribe(res => {
      alert(res.toString());
    });
  }

}

