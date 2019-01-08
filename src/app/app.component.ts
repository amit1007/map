import { Component,OnInit,  } from '@angular/core';
import * as $ from 'jquery';
import { log } from 'util';
import {MapService} from './service/map.service'
import {FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService],
})
export class AppComponent implements OnInit{

  mapForm:FormGroup;
  title = 'map2';
  position:any;
  submitted = false;
  
  constructor(private map : MapService,private FormGroup : FormGroup) { }

  ngAfterViewInit(){
    this.getLocation();
   }
  ngOnInit(){
    console.log ("My Button Init");
  } 
  onSubmit(){
    // this.submitted = true;
    // if (this.mapForm.invalid) {
    //   return;  
    // }
    // alert('SUCCESS!!')
    this.map.getCoordinateInfo(this.position);
  }
  getLocation() {
    if(navigator.geolocation) 
    {
      console.log(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } 
    else {
      console.log("Geo Location not supported by browser");
    }
  }
  // function that retrieves the position
  showPosition(position) {
    var location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude      
    }
    $("#currentLong").html(location.latitude);
    $("#currentLat").html(position.coords.latitude);
    alert("Latitude is "+position.coords.latitude);
    alert("Longitude is "+position.coords.longitude);
  }

}