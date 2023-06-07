import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  hide = true;
  adminForm = this.formBuilder.group({
    userName: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  onSubmit(username: string, password: string){
    const credentials = { username: username, password: password };
console.log(credentials)
    this.http.post('http://localhost:3000/api/admin/login', credentials).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Login successful!');
          this.router.navigate(['/adminDashboard']);
        } else {
          console.log('Login failed. Please try again.');
        }
      },
      (error: any) => {
        console.log('An error occurred during login:', error);
      }
  
  )
}
}
