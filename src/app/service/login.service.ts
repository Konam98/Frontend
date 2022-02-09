import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  getData() {
    return {

      email: 'bhosale@gmail.com', password: 'beta1_007'
    }
  }
}



