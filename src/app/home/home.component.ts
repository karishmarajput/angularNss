import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAdminSection: boolean = false;
  events: any;
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.getLatestEvents();
  }

  getLatestEvents() {
    this.http.get('http://localhost:3000/api/events', { responseType: 'json' }).subscribe((data: any) => {
      console.log(data)
      
        this.events = data.data.events.slice(0, 6);
  console.log(this.events)
    });
  }
  
}
