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
    return this.http.get('https://api.apilayer.com/fixer/latest?symbols=GBP&base=EUR&access_key=09shqoXfOu7oyC201irjJ1M5CAFCurOE', { headers: myHeaders });
  }


  getSymbols(): Observable<any> {
    return this.http.get('assets/json/symbols.json');
  }

  getConverstion(symbols: string, base: string): Observable<any> {
    // return this.http.get('assets/json/test.json');
    var myHeaders = new HttpHeaders().set('apikey', environment.fixedApiKey);;
    return this.http.get(`https://api.apilayer.com/fixer/latest?symbols=${symbols}&base=${base}&access_key=09shqoXfOu7oyC201irjJ1M5CAFCurOE`, { headers: myHeaders });
  }

  getChart(symbols: string, base: string): Observable<any> {
    // return this.http.get('assets/json/testtwo.json');
    var myHeaders = new HttpHeaders().set('apikey', environment.fixedApiKey);;
    return this.http.get(`https://api.apilayer.com/fixer/timeseries?symbols=${symbols}&base=${base}&start_date=2022-12-01&end_date=2022-12-30`, { headers: myHeaders });
  }


}
