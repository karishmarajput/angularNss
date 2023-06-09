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
   volunteer:any
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit() {
    this.getVolunteers();
    this.addEventForm = this.formBuilder.group({
      eventName: '',
      eventDate: '',
      venue: '',
      noOfBeneficiar: '',
      content: '',
      imagePath: ''
    });
  }
  selectedUsers: any[] = [];

  toggleSelection(user: any) {
    const index = this.selectedUsers.findIndex(selectedUser => selectedUser.vec === user.vec);

    if (index > -1) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
  }
  isSelected(user: any) {
    return this.selectedUsers.some(selectedUser => selectedUser.vec === user.vec);
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
  formDataContent: string = '';
  displayFormDataContent(formData: FormData) {
    this.formDataContent = '';

    formData.forEach((value, key) => {
      this.formDataContent += `${key}: ${value}\n`;
    });
    console.log(this.formDataContent)
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
      const selectedUserIds = this.selectedUsers.map(user => user.vec);
      for (const userId of selectedUserIds) {
        formData.append('selectedUserIds', userId.toString());
      }
      this.displayFormDataContent(formData);
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
