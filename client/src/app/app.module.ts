import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { CakeComponent } from './cake/cake.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [AppComponent, CakeComponent, ReviewComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
