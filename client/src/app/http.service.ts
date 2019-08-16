import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { this.getHeroes() }

  getHeroes() {
  	return this._http.get('/heroes');
  }

  getOne() {
  	return this._http.get('/heroes/:_id')
  }
}
