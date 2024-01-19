import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { UserservicesService } from './userservices.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AboutComponent,ContactsComponent,HomeComponent,RouterModule,NavBarComponent,NotfoundComponent,AdminComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignment-5';
}
