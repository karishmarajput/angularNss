import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  events: any;
  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get('http://localhost:3000/api/events', {responseType: "json"}).subscribe((data)=>{
      console.log(data)
      this.events = data
    })
  }
  
}
