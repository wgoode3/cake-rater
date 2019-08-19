import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  cakes : any = [];
  newCake : any = {};
  review : any = {};

  constructor(private _http : HttpService) {}

  ngOnInit( cb ) {
    let observable : Observable<any> = this._http.getCake();
    observable.subscribe(data => {
      this.cakes = data;
      for(let i=0; i<this.cakes.length; i++) {
        this.cakes[i].isVisible = false;
      }
      if(typeof(cb) === "function") {
        cb();
      }
    });
  }

  bake() {
    let observable : Observable<any> = this._http.bakeCake(this.newCake);
    observable.subscribe(data => {
      console.log(data);
      this.ngOnInit( () => {} );
      this.newCake = {};
    });
  }

  toggleCake(i) {
    for(let i=0; i<this.cakes.length; i++) {
      this.cakes[i].isVisible = false;
    }
    this.cakes[i].isVisible = true;
  }

  reviewEvent(eventData) {
    console.log(eventData);
    this.ngOnInit( () => {
      this.cakes[eventData].isVisible = true;
    });
  }

}
