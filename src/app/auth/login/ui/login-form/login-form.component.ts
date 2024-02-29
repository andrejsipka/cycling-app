import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule
  ],
  template: `
    <div>
      <h2>Login</h2>

      <form (ngSubmit)="signIn($event)">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required value="admin@test.com">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required value="test1234">
        </div>
        <button type="submit">Sign in</button>
      </form>

      <h2>Or</h2>

      <!-- Add your Google sign-in button code -->
      <button disabled>Sign in with Google</button>
    </div>
  `
})
export class LoginFormComponent {
  private router: Router = inject(Router);

  public signIn(event :Event) :void {
    event.preventDefault();

    // Make a request to the server

    // If user exist => return value will be session cookie or doesn't exist

    // If doesn't => show error

    this.router.navigate(['/activities']);
  }
}
