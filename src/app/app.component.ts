import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  lat: number = 57.149717;
  lng: number = -2.094278;

  data;

  constructor(private http:Http) {
    this.http.get('data/abdn_RoadSafety_Accidents_2012.json')
      .subscribe(result => {
        this.data = result.json();
      });
  }

  additor() {
    this.data = [{
      Latitude: "57.193756",
      Longitude: "-2.093622"
    }]
  }
}