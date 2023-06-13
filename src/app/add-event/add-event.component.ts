import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  addEventForm!: FormGroup;
  volunteer!: any[];
  selectedUsers: any[] = [];
  pageSize = 10;
  currentPage = 0;
  paginatedVolunteers: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.getVolunteers();
    this.addEventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      venue: ['', Validators.required],
      noOfBeneficiar: ['', Validators.required],
      content: ['', Validators.required],
      imagePath: ['', Validators.required]
    });
  }

  formDataContent: string = '';
  displayFormDataContent(formData: FormData) {
    this.formDataContent = '';

    formData.forEach((value, key) => {
      this.formDataContent += `${key}: ${value}\n`;
    });
    console.log(this.formDataContent)
  }

  toggleSelection(user: any) {
    const index = this.selectedUsers.findIndex(
      (selectedUser) => selectedUser.vec === user.vec
    );

    if (index > -1) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
  }

  isSelected(user: any) {
    return this.selectedUsers.some(
      (selectedUser) => selectedUser.vec === user.vec
    );
  }

  getVolunteers() {
    this.http
      .get('http://localhost:3000/api/volunteers')
      .subscribe(
        (response: any) => {
          this.volunteer = response.data.volunteers;
          this.paginateVolunteers();
        },
        (error: any) => {
          console.log('Error: ', error);
        }
      );
  }

  onSubmit() {
    const selectedUserIds = this.selectedUsers.map((user) => user.vec);

    if (this.addEventForm.invalid || selectedUserIds.length === 0 || this.addEventForm.value.imagePath === '') {
      return;
    }

    const formData = new FormData();
    formData.append('eventName', this.addEventForm.value.eventName);
    formData.append('eventDate', this.addEventForm.value.eventDate);
    formData.append('venue', this.addEventForm.value.venue);
    formData.append('noOfBeneficiar', this.addEventForm.value.noOfBeneficiar);
    formData.append('content', this.addEventForm.value.content);
    formData.append('image', this.addEventForm.value.imagePath);

    for (const userId of selectedUserIds) {
      formData.append('selectedUserIds', userId.toString());
    }

    this.displayFormDataContent(formData);
    this.http
      .post('http://localhost:3000/api/admin/addEvent', formData)
      .subscribe(
        (response: any) => {
          if (response.success) {
            console.log('Event Added Successfully');
            this.router.navigate(['/adminDashboard']);
          } else {
            console.log('Error occurred. Please try again.');
          }
        },
        (error: any) => {
          console.log('An error occurred during event creation:', error);
        }
      );
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.paginateVolunteers();
  }

  paginateVolunteers(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedVolunteers = this.volunteer.slice(startIndex, endIndex);
  }
}
