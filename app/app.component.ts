import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

// import { ArtistItemComponent } from './component.artist-item';

export class Artist {
	id: number;
  longitude: number;
  latitude: number;
  severity: number;
  speed_limit: number;
  date: string;

}

@Component({
  selector: 'app',
  template: "<h1>test</h1>"

})

export class AppComponent {

}
