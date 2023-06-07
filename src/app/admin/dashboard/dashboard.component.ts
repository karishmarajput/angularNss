import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  eventCount: number = 0;
  volunteerCount: number = 0;
  benificiarCount: number = 0;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getEvents();
    this.getVolunteers();
  }

  getEvents() {
    this.http.get('http://localhost:3000/api/events').subscribe(
      (response: any) => {
        const events = response.data.events;
        console.log(response)
        this.eventCount = events.length;
        for(let i =0; i < events.length; i++){
          this.benificiarCount+= events[i].noOfBenificiar
        }
      },
      (error: any) => {
        console.log('An error occurred while retrieving events:', error);
      }
    );
  }
  getVolunteers(){
    this.http.get('http://localhost:3000/api/volunteers').subscribe(
      (response:any)=>{
        const volunteer = response.data.volunteers;
        console.log(response)
        this.volunteerCount = volunteer.length;
      },
      (error:any)=>{
        console.log('Error: ', error)
      }
    )
  }
}
