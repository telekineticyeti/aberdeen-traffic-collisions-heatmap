import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class CollisionData {
    private years_available = [ 2012, 2013, 2014, 2015, 2016 ];
    serviceData;

    constructor(private http:Http) {}

    yearsAvailable() {
        return this.years_available;
    }

    get(year) {
        var url;
        url = 'data/abdn_RoadSafety_Accidents_' + year + '.json';
        console.log(url);
        return this.http.get(url).map(this.extractData);
    }

    extractData(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        this.serviceData = res.json();

        // Convert coordinates from strings to floats
        for (let i = 0; i < this.serviceData.length; i++) {
            const el = this.serviceData[i];
            el.Longitude = parseFloat(el.Longitude);
            el.Latitude = parseFloat(el.Latitude);
        }

        return this.serviceData;
    }

}