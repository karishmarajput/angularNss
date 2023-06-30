import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpAdminService } from 'src/services/http-admin.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  event: any;
  performer: any;
  slides: any[] = new Array()
  constructor(private route: ActivatedRoute,private http: HttpClient,private HttpAdminService: HttpAdminService,){}
  ngOnInit() {
    this.getEvent();
  }
  getEvent() {
    this.route.paramMap.subscribe(params => {
      const eventId = params.get('eventId');
      this.HttpAdminService.getEvent(eventId).subscribe((data: any) => {
        this.event = data
        
        this.performer = this.event.performers.length
        for( let i = 0; i < this.performer;i++){
          this.slides[i] = {
            id: this.event.performers[i].id,
            src: this.event.performers[i].image,
            title: this.event.performers[i].short_name,
            eventCount: this.event.performers[i].stats.event_count,

          }
        }

      });
    });
    
  }
}
