import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.css']
})
export class AddVolunteerComponent {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  onSubmit(vec:string,name:string,dob:string){
    let data={vec:vec,name:name,dob:dob}
    this.http.post('http://localhost:3000/api/admin/addVolunteer', data).subscribe(
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
  }
}
