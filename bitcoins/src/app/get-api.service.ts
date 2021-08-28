import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }
apiCall()
{
  return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json').pipe(
    catchError(this.handleError)
    );
}
handleError(error: HttpErrorResponse){
  alert("Make sure your Internet Connectionn");
  return throwError(error);
  }

}
