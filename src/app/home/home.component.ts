import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, private router:Router) { }

  logout() {
    this.authService.logout();
  }
  goToAdmin(){
    this.router.navigate(['admin']);
    // this.router.navigateByUrl('/admin');

  }

}
