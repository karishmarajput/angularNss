import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpAdminService } from 'src/services/http-admin.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAdminSection: boolean = false;
  events: any;
  id:any;
  venue: any;

  selectedValue: any;
  constructor(private http: HttpClient,private HttpAdminService: HttpAdminService,){}
  ngOnInit() {
    this.getLatestEvents();
    this.getVenues()
  }

  getLatestEvents() {

    this.HttpAdminService.getEvents().pipe(
      catchError((error: any) => {
        console.error('An error occurred:', error);
        alert(error.message)
        return throwError(error);
      })
    ).subscribe((data: any) => {
      console.log(data.events)
      this.events = data.events;

    });

  }
  openEvent(id:any){
    this.id = id
    
  }
  getVenues(){
    this.HttpAdminService.getVenues().subscribe((data:any)=>{
      this.venue = data.venues

    })
  }
  searchAccording(){
    this.HttpAdminService.getEventWithVenue(this.selectedValue).subscribe((data:any)=>{
      console.log(data)
      this.events = data.events;
    })
  }
}
