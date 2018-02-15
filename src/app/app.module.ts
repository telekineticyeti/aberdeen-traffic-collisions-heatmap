import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

import { Test } from '../test/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    Test
  ],
  imports: [
	BrowserModule,
	MaterialModule,
	BrowserAnimationsModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyD8uYj3QN77h_yGc8oy-1aJCQGhYxbaW_M',
		libraries: ['visualization']
	}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }