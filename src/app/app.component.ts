import { Component } from '@angular/core';
import { MapMarkerInfo } from './mapmarker-info.component';
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
  year_selected: number;
  infoWindowOpened = null;

  /** 
   * Display the first year on load
  */
  ngOnInit() {
    this.changeYear(this.years_available[0]);
  }

  changeYear(year) {
    // Reset info window open flag when the year is changed.
    this.infoWindowOpened = null;
    this.year_selected = year;
    this.collisionData.get(year).subscribe(result => {
      this.data = result;
      this.incident_count = result.length;
    });
  }

  /**
   * Automate closing of a marker's info window when another is activated
   */
  clickedMarker(label: string, infoWindow, index: number) {
    if (this.infoWindowOpened === infoWindow) return;
    if (this.infoWindowOpened !== null) this.infoWindowOpened.close();
    this.infoWindowOpened = infoWindow;
  }

  aboutDialog() {
    console.log("tba");
  }
}