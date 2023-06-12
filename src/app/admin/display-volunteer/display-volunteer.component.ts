import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-volunteer',
  templateUrl: './display-volunteer.component.html',
  styleUrls: ['./display-volunteer.component.css']
})
export class DisplayVolunteerComponent {
  volunteer:any
  ngOnInit() {
    
    this.getVolunteers();
  }
  constructor(private http: HttpClient,private router: Router) {}
  goToAddVolunteer() {
    this.router.navigate(['/adminDashboard/addVolunteer']);
  }
  getVolunteers(){
    this.http.get('http://localhost:3000/api/volunteers').subscribe(
      (response:any)=>{
        this.volunteer = response.data.volunteers;
      },
      (error:any)=>{
        console.log('Error: ', error)
      }
    )
  }
}
