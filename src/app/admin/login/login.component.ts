import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';

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
  ) {}
  onSubmit(): void {
    console.log('hello')
    alert('Login successfully');
    this.adminForm.reset();
  }
}
