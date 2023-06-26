import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpAdminService } from 'src/services/http-admin.service';

@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
  styleUrls: ['./performer.component.css']
})
export class PerformerComponent {
  data: any
  constructor(private route: ActivatedRoute,private http: HttpClient,private HttpAdminService: HttpAdminService,){}
  ngOnInit() {
    this.getPerformer();
  }
  getPerformer(){
    this.route.paramMap.subscribe(params =>{
      const performerId = params.get('performerId');
      this.HttpAdminService.getPerformer(performerId).subscribe((data: any) => {
        this.data = data
        console.log(data)
      })
    })
  }
}
