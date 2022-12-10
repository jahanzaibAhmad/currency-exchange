import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(
    private http: HttpClient,
  ) { }

  getFixerDetail(): Observable<any> {
    var myHeaders = new HttpHeaders().set('apikey', environment.fixedApiKey);;
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'responseType': 'json',
//       "apikey": "09shqoXfOu7oyC201irjJ1M5CAFCurOE"
//   });

// myHeaders.append("apikey", "09shqoXfOu7oyC201irjJ1M5CAFCurOE");



    // this.http = new HttpClient(this.httpBackend);
    return this.http.get('https://api.apilayer.com/fixer/latest?symbols=GBP&base=EUR&access_key=09shqoXfOu7oyC201irjJ1M5CAFCurOE', {headers: myHeaders});
    
    
  }
}
