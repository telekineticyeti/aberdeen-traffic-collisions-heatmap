import { Component } from '@angular/core';
import { CollisionData } from "./collision-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private collisionData:CollisionData) {}

  data;
  lat: number = 57.149717;
  lng: number = -2.094278;
  years_available = this.collisionData.yearsAvailable();
  incident_count: number = 0;
  private year_selected: number;

  ngOnInit() {
    this.changeYear(this.years_available[0]);
  }

  changeYear(year) {
    this.year_selected = year;
    this.collisionData.get(year).subscribe(result => {
      this.data = result;
      this.incident_count = result.length;
    });
  }

  aboutDialog() {
    console.log("tba");
  }
}