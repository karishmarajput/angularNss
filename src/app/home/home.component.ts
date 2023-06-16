import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpAdminService } from 'src/services/http-admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAdminSection: boolean = false;
  events: any;
  constructor(private http: HttpClient,private HttpAdminService: HttpAdminService,){}
  ngOnInit() {
    this.getLatestEvents();
  }

  getLatestEvents() {
    this.HttpAdminService.getEvents().subscribe((data: any) => {
      console.log(data.events)
      this.events = data.events.slice(0, 6);
    });
  }
  
}
