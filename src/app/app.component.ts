import { Component,ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
// import { } from '@types/googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('gmap') gmapElement: any;
    // google maps zoom level
    zoom: number = 8;
    isTracking = true;
    loc:any;
    loc1:any;
    // currentLat: any;
    // currentLong: any;
    // map: google.maps.Map;
    // marker: google.maps.Marker;


    // initial center position for the map
    lat: number = 20.5937;
    lng: number = 78.9629;
  //20.5937° N, 78.9629° E
    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }
    
    mapClicked($event: MouseEvent) {
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true
      });
      // this.loc=this.lat;
      // this.loc1=this.lng;
    }
    
    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
      this.loc=m.lat,m.lng;
      this.loc1=m.lng;
    }
    
    // findMe() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       this.showPosition(position);
    //     });
    //   } else {
    //     alert("Geolocation is not supported by this browser.");
    //   }
    // }
    // showPosition(position) {
    //   this.currentLat = position.coords.latitude;
    //   this.currentLong = position.coords.longitude;
  
    //   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //   this.map.panTo(location);
  
    //   if (!this.marker) {
    //     this.marker = new google.maps.Marker({
    //       position: location,
    //       map: this.map,
    //       title: 'Got you!'
    //     });
    //   }
    //   else {
    //     this.marker.setPosition(location);
    //   }
    // }
    // trackMe() {
    //   if (navigator.geolocation) {
    //     this.isTracking = true;
    //     navigator.geolocation.watchPosition((position) => {
    //       this.showTrackingPosition(position);
    //     });
    //   } else {
    //     alert("Geolocation is not supported by this browser.");
    //   }
    // }
    // showTrackingPosition(position) {
    //   console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    //   this.currentLat = position.coords.latitude;
    //   this.currentLong = position.coords.longitude;
  
    //   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //   this.map.panTo(location);
  
    //   if (!this.marker) {
    //     this.marker = new google.maps.Marker({
    //       position: location,
    //       map: this.map,
    //       title: 'Got you!'
    //     });
    //   }
    //   else {
    //     this.marker.setPosition(location);
    //   }
    // }
    
    markers: marker[] = [
      {
        lat: 20.5937,
        lng: 78.9629,
        label: 'A',
        draggable: true
      },
      
    ]
  }
  
  // just an interface for type safety.
  interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
  }
  