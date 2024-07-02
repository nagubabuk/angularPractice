import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userRole: string = '';

  constructor(private router: Router) { }
  login(role: string) {
    this.isAuthenticated = true;
    this.userRole = role;
    this.router.navigate(['/home']);
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = '';
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getRole(): string {
    return this.userRole;
  }
}
