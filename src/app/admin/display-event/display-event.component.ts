import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent {
  events:any
  ngOnInit() {
    
    this.getVolunteers();
  }
  constructor(private http: HttpClient) {}
  getVolunteers(){
    this.http.get('http://localhost:3000/api/events').subscribe(
      (response:any)=>{
        this.events = response.data.events;
      },
      (error:any)=>{
        console.log('Error: ', error)
      }
    )
  }
}