import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';

  constructor(private authService: AuthService, private router:Router) { }

  login() {

    this.authService.login(this.username, this.password)
      .subscribe({

        next: (response) => {
          localStorage.setItem('token',response.token);
          console.log("Login Successful");
          this.router.navigate(['/dashboard']);
        },

        error: (error) => {

          console.log(error);

        }

      });

  }

}