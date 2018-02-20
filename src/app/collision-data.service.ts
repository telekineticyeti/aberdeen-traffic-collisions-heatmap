import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class CollisionData {
    years_available;
    service_data;

    constructor(private http:Http) {
        this.years_available = [ 2012, 2013, 2014, 2015, 2016 ];
    }

    yearsAvailable() {
        return this.years_available;
    }

    get(year) {
        var url;
        url = 'data/abdn_RoadSafety_Accidents_' + year + '.json';
        return this.http.get(url).map(this.extractData);
    }

    extractData(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        this.service_data = res.json();

        // Convert coordinates from strings to floats
        for (let i = 0; i < this.service_data.length; i++) {
            const data_item = this.service_data[i];
            data_item.Longitude = parseFloat(data_item.Longitude);
            data_item.Latitude = parseFloat(data_item.Latitude);
        }
        return this.service_data;
    }

    junctionDetail(code:string) {
        let string;
        switch(code) {
            case "0": string = "Not near a junction"; break;
            case "1": string = "Roundabout"; break;
            case "2": string = "Mini Roundabout"; break;
            case "3": string = "T or staggered junction"; break;
            case "4": string = "Slip road"; break;
            case "5": string = "Crossroad"; break;
            case "6": string = "Junction with more than 4 arms (mpr RAB)"; break;
            case "7": string = "Using private drive or entrance"; break;
            case "8": string = "Other"; break;
            default: string =  null;
        }
        return string;
    }

    junctionControl(code:string) {
        let string;
        switch(code) {
            case "1": string = "Authorised person"; break;
            case "2": string = "Automated traffic signal"; break;
            case "3": string = "Stop sign"; break;
            case "4": string = "Give way or uncontrolled"; break;
            default: string = null;
        }
        return string;
    }
    
    pedestrianCrossingControl(code:string) {
        let string;
        switch(code) {
            case "0": string = "None within 50 metres"; break;
            case "1": string = "Control by school crossing patrol"; break;
            case "2": string = "Control by authorised person"; break;
            default: string = "Unknown pedestrian crossing control";
        }
        return string;
    }

    pedestrianCrossingFacilities(code:string) {
        let string;
        switch(code) {
            case "0": string = "No crossing facility within 50 metres"; break;
            case "1": string = "Zebra Crossing"; break;
            case "4": string = "Pelican, puffin, toucan or similar light crossing"; break;
            case "5": string = "Pedestrian phase at traffic light junction"; break;
            case "7": string = "Footbridge or subway"; break;
            case "8": string = "Central refuge with no other controls"; break;
            default: string = "Unknown pedestrian crossing facility";
        }
        return string;
    }

    roadType(code:string) {
        let string;
        switch(code) {
            case "1": string = "Roundabout"; break;
            case "2": string = "One way street"; break;
            case "3": string = "Dual carriageway"; break;
            case "6": string = "Single carriageway"; break;
            case "7": string = "Slip road"; break;
            case "9": string = "Unknown road type"; break;
            default: string = "Unknown road type";
        }
        return string;
    }

    weatherConditions(code:string) {
        let string;
        switch(code) {
            case "1": string = "Fine"; break;
            case "2": string = "Raining"; break;
            case "3": string = "Snowing"; break;
            case "4": string = "Fine with high winds"; break;
            case "5": string = "Raining with high winds"; break;
            case "6": string = "Snowing with high winds"; break;
            case "7": string = "Fog or mist"; break;
            case "8": string = "Other"; break;
            case "9": string = "Unknown weather"; break;
            default: string = null;
        }
        return string;
    }

    lightConditions(code:string) {
        let string;
        switch(code) {
            case "1": string = "Daylight"; break;
            case "4": string = "Dark with lit street lights"; break;
            case "5": string = "Dark with unlit street lights"; break;
            case "6": string = "No Street Lights"; break;
            case "7": string = "Unknown lighting"; break;
            default: string = null;
        }
        return string;
    }

    roadSurfaceConditions(code:string) {
        let string;
        switch(code) {
            case "1": string = "dry roads"; break;
            case "2": string = "wet/damp roads"; break;
            case "3": string = "snowy roads"; break;
            case "4": string = "frosty/iced over roads"; break;
            case "5": string = "flooded road with surface water over 3cm deep"; break;
            default: string = null;
        }
        return string;
    }

    specialConditionsAtSite(code:string) {
        let string;
        switch(code) {
            case "0": string = null; break;
            case "1": string = "Auto traffic signal out"; break;
            case "2": string = "Auto traffic signal partially defective"; break;
            case "3": string = "Permanent road signing or marking defective or obscured"; break;
            case "4": string = "Roadworks"; break;
            case "5": string = "Road surface defective"; break;
            case "6": string = "Oil or diesel"; break;
            case "7": string = "Mud"; break;
            default: string = null;
        }
        return string;
    }

    carriagewayHazards(code:string) {
        let string;
        switch(code) {
            case "0": string = null; break;
            case "1": string = "Dislodged vehicle load in carriageway"; break;
            case "2": string = "Other object in carriageway"; break;
            case "3": string = "Involvement with previous accident"; break;
            case "6": string = "Pedestrian in carriageway - not injured"; break;
            case "7": string = "Any animal in carriageway (except ridden horse)"; break;
            default: string = null;
        }
        return string;
    }

    policeOfficerAttendScene(code:string) {
        let boolean;
        switch(code) {
            case "1": boolean = true; break;
            case "2": boolean = false; break;
            default: boolean = false;
        }
        return boolean;
    }

    accidentSeverity(code:string) {
        let string;
        switch(code) {
            case "1": string = "Fatal"; break;
            case "2": string = "Serious"; break;
            case "3": string = "Slight"; break;
            default: string = null;
        }
        return string;
    }
}