import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() cakeToReview : any;
  @Input() cakeIndex : number;
  @Output() cakeEvent = new EventEmitter();
  review : any = {};

  constructor(private _http : HttpService) { }

  ngOnInit() {
  }

  placeReview() {
    let observable : Observable<any> = this._http.review(this.cakeToReview._id, this.review);
    observable.subscribe(data => {
      console.log(data);
      this.cakeEvent.emit(this.cakeIndex);
      this.review = {};
    });
  }


}
