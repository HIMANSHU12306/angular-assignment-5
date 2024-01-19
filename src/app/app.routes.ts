import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { OnlyLoggedInUsersGuard } from './only-logged-in-users-guard.guard';
import { GenericUserFormComponent } from './generic-user-form/generic-user-form.component';



export const routes: Routes = [
    {path:'', component:NavBarComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contacts', component:ContactsComponent},
    {path:'admin', component:AdminComponent,canActivate: [OnlyLoggedInUsersGuard]},
    {path:'genericuserform', component:GenericUserFormComponent},
    
    {path:'**', component:NotfoundComponent},

];
