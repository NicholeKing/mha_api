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

  delete(_id) {
  	return this._http.delete('heroes/' + _id);
  }

  create(data: object) {
  	return this._http.post('/heroes', data);
  }

  update(_id, data: object){
  	return this._http.put('/heroes/' + _id, data);
  }
}
