import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapMarkerInfo } from './mapmarker-info.component';
import { CollisionData } from "./collision-data.service";

@NgModule({
  declarations: [
    AppComponent,
    MapMarkerInfo
  ],
  imports: [
	BrowserModule,
  HttpModule,
	MaterialModule,
  BrowserAnimationsModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyD8uYj3QN77h_yGc8oy-1aJCQGhYxbaW_M',
		libraries: ['visualization']
	}),
  ],
  providers: [ CollisionData ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }