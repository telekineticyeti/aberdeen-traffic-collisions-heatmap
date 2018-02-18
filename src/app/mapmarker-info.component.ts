import { Component } from '@angular/core';
import { CollisionData } from "./collision-data.service";

@Component({
  selector: 'markerInfo',
  templateUrl: './mapmarker-info.component.html',
  inputs: ['location']
})

export class MapMarkerInfo {
  constructor(private collisionData:CollisionData) {}
}