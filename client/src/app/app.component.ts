import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people: any = [];
  newHero: any;
  upHero: any;
  showAll = false;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newHero = {real_name: "", alias: "", quirk: "", status: ""};
    this.upHero = {real_name: "", alias: "", quirk: "", status: ""};
  }

  getAllHeroes() {
    this.showAll=true;
  	let observable = this._httpService.getHeroes();
  	observable.subscribe(data => {
  		console.log("Got our people!", data);
  		this.people = data;
  		for (var i = 0; i < this.people.length; i++){
  			this.people[i].isVisible = false;
        this.people[i].beingUpdated = false;
  		}
  	});
  }

  toggleView(i){
    this.people[i].isVisible = !this.people[i].isVisible;
  }
  
  toggleUpdate(i) {
    this.people[i].beingUpdated = !this.people[i].beingUpdated;
    this.upHero = this.people[i];
    for (let k = 0; k < this.people.length; k++){
      if (this.people[k] !== this.people[i]) {
        this.people[k].beingUpdated = false;
      }
    }
  }

  deleteHero(_id) {
    let her = this._httpService.delete(_id)
    her.subscribe( data => {
      console.log(data);
      this.getAllHeroes();
    })
  }

  addHero() {
    let newH = this._httpService.create(this.newHero);
    newH.subscribe( data => {
      console.log(data);
      this.ngOnInit();
      this.getAllHeroes();
    });
  }

  updateHero(_id){
    let upH = this._httpService.update(_id, this.upHero);
    upH.subscribe( data => {
      console.log(data);
      this.ngOnInit();
      this.getAllHeroes();
    });
  }
}
