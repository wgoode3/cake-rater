import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient : HttpClient) { }

  getCake() : Observable<any> {
    return this._httpClient.get("/cakes");
  }

  bakeCake(cake : any) : Observable<any> {
    return this._httpClient.post("/cakes", cake);
  }

  review(_id: String, review : any) : Observable<any> {
    return this._httpClient.post(`/review/${_id}`, review);
  } 
}
