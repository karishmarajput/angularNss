import { Component,OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  addEventForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit() {
    this.addEventForm = this.formBuilder.group({
      eventName: '',
      eventDate: '',
      venue: '',
      noOfBeneficiar: '',
      content: '',
      imagePath: ''
    });
  }

  onSubmit(eventName: string, eventDate: string,venue:string,noOfBenificiar:string,content:string,imagePath: File | undefined){
    if(imagePath){
      console.log(eventName,eventDate,imagePath)
      const formData = new FormData();
      formData.append('eventName', eventName);
      formData.append('eventDate', eventDate);
      formData.append('venue', venue);
      formData.append('noOfBenificiar', noOfBenificiar);
      formData.append('content', content);
      formData.append('image', imagePath);
      this.http.post('http://localhost:3000/api/admin/addEvent', formData).subscribe(
          (response: any) => {
            if (response.success) {
              console.log('Event Added Successfully');
              this.router.navigate(['/adminDashboard']);
            } else {
              console.log('Error occured. Please try again.');
            }
          },
          (error: any) => {
            console.log('An error occurred during login:', error);
          }
      
      )
    }else{
      console.log('error')
    }
 
  }
  

}
