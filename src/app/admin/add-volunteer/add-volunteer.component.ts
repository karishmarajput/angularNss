import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.css']
})
export class AddVolunteerComponent implements OnInit{
  volunteerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit() {
    this.volunteerForm = this.formBuilder.group({
      vec: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }
  onSubmit(){
    if (this.volunteerForm.valid) {
      const volunteer = {
        vec: this.volunteerForm.value['vec'],
        name: this.volunteerForm.value['name'],
        dob: this.volunteerForm.value['dob']
      };
    this.http.post('http://localhost:3000/api/admin/addVolunteer', volunteer).subscribe(
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
  this.volunteerForm.reset();
  }
}
}
