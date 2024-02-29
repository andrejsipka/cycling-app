import { Component } from '@angular/core';
import { LoginFormComponent } from './ui/login-form/login-form.component';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [
    LoginFormComponent
  ],
  template: `
    <app-login-form />
  `,
})
export class LoginComponent {}
