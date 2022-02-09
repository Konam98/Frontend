import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Contact/about/about.component';
import { ContactinfoComponent } from './Contact/contactinfo/contactinfo.component';
import { HomepageComponent } from './Contact/homepage/homepage.component';
import { ProfileComponent } from './Contact/profile/profile.component';
import { RegisterComponent } from './Contact/register/register.component';
import { UserloginComponent } from './Contact/userlogin/userlogin.component';


const routes: Routes = [
  {path:'Contact/register',
  component:RegisterComponent
  },
  {path:'Contact/userlogin',
  component:UserloginComponent
  },
  {path:'Contact/contactinfo',
  component:ContactinfoComponent
  },
  {path:'Contact/homepage',
  component:HomepageComponent
  },
  {path:'Contact/about',
  component:AboutComponent
  },
  {path:'Contact/profile',
  component:ProfileComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
