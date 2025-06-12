import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { KeycloakService } from '../../../utils/keycloak/keycloak.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  implements OnInit{
  isManager: boolean = false;
  isTechnical: boolean = false;
constructor(private keycloakService: KeycloakService){

}
  ngOnInit(): void {
    const roleString = localStorage.getItem('userRoles');
    console.log('Raw role string from localStorage:', roleString);

  }


  logout() {
    this.keycloakService.logout();
  }
}
