import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpAdminService } from 'src/services/http-admin.service';

@Component({
  selector: 'app-perform',
  templateUrl: './perform.component.html',
  styleUrls: ['./perform.component.css']
})
export class PerformComponent {
  performer: any;
  id:any;
  constructor(private http: HttpClient,private HttpAdminService: HttpAdminService,){}
  ngOnInit() {
    this.getPerformer();
  }

  getPerformer() {
    this.HttpAdminService.getPerform().subscribe((data: any) => {
      console.log(data)
      this.performer = data.performers;
    });
  }
}
