import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people: any = [];
  person: any =[];
  showAll = false;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
  }

  toggleView(i){
    console.log(i);
    this.people[i].isVisible = !this.people[i].isVisible;
  }

  getAllHeroes() {
    this.showAll=true;
  	let observable = this._httpService.getHeroes();
  	observable.subscribe(data => {
  		console.log("Got our people!", data);
  		this.people = data;
  		for (var i = 0; i < this.people.length; i++){
  			this.people[i].isVisible = false;
  		}
  	});
  }
}
