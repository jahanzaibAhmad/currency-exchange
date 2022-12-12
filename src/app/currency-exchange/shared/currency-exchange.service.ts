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
    var myHeaders = new HttpHeaders().set('apikey', environment.fixedApiKey); //Todo: May use intercepter to add key in header
    return this.http.get('https://api.apilayer.com/fixer/latest?symbols=GBP&base=EUR', { headers: myHeaders });
  }


  getSymbols(): Observable<any> {
    return this.http.get('assets/json/symbols.json');  // Saved value in JSON to save API calls in Development (As Symbols remain same no need to call fixer.io)
  }

  getConverstion(symbols: string, base: string): Observable<any> {
    /** return this.http.get('assets/json/test.json');  */ // Saved value in JSON to save API calls in Development
    // return this.http.get('assets/json/test.json');
    var myHeaders = new HttpHeaders().set('apikey', environment.fixedApiKey); //Todo: May use intercepter to add key in header
    return this.http.get(`https://api.apilayer.com/fixer/latest?symbols=${symbols}&base=${base}`, { headers: myHeaders });
  }

  getChart(symbols: string, base: string, lastDatesArray:string[]): Observable<any> {
    /** return this.http.get('assets/json/testtwo.json');  */ // Saved value in JSON to save API calls in Development
    // return this.http.get('assets/json/testtwo.json');
    var myHeaders = new HttpHeaders().set('apikey', environment.fixedApiKey); //Todo: May use intercepter to add key in header
    return this.http.get(`https://api.apilayer.com/fixer/timeseries?symbols=${symbols}&base=${base}&start_date=${lastDatesArray[0]}&end_date=${lastDatesArray[lastDatesArray.length-1]}`, { headers: myHeaders });
  }


}
