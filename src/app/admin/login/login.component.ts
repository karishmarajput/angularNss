import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpAdminService } from 'src/services/http-admin.service';

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
    private router: Router,
    private HttpAdminService:HttpAdminService
  ) {}
  onSubmit(username: string, password: string){
    const credentials = { username: username, password: password };
    if(username == 'admin' && password=='admin'){
      this.router.navigate(['/adminDashboard']);
    }else{
      console.log("login Failed")
    }
} 
}
