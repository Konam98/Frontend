import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { baseUrl } from 'src/shared/baseUrl';
import { ContactDetails } from 'src/shared/contact-details';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  processHTTPMsgService: any;


  constructor(private http: HttpClient) { }

  getAllContact(): Observable<ContactDetails[]> {
    return this.http.get<ContactDetails[]>(baseUrl + 'api/User/GetContacts')
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteContactById(value:any){
    return this.http.delete(baseUrl+'api/User/DeleteContactById?'+'ContactId='+value);

  }
  addContact(contactdetails:ContactDetails): Observable<ContactDetails[]> {
    const formData: FormData = new FormData();
    formData.append('contactName', contactdetails.contactName);
    formData.append('contactNumber', contactdetails.contactNumber);
    formData.append('contactEmail', contactdetails.contactEmail);    
    formData.append('contactAdress', contactdetails.contactAddress);
    console.log(formData);
    return this.http.post<any>(baseUrl + 'api/User/AddContact', formData)
    .pipe(catchError(error => this.handleError(error)));

  }


  // get all contact data
  // getAllContact(url: string): Observable<IContact[]> {
  //   return this.http.get<IContact[]>(url)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // custom handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}











