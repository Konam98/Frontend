import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './Contact/register/register.component';
import { UserloginComponent } from './Contact/userlogin/userlogin.component';
import { ContactinfoComponent } from './Contact/contactinfo/contactinfo.component';
import { HomepageComponent } from './Contact/homepage/homepage.component';
import { AboutComponent } from './Contact/about/about.component';
import { ContactService } from './service/contact.service';
import { baseUrl } from 'src/shared/baseUrl';



import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './Contact/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserloginComponent,
    ContactinfoComponent,
    HomepageComponent,
    AboutComponent,
    ProfileComponent
    

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
