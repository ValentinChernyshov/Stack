import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EmptyComponent } from '../empty/empty.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'empty', pathMatch: 'full'},
  { path: 'empty', component: EmptyComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations: [],
  imports:      [ RouterModule.forRoot(routes)],
  exports:      [ RouterModule ]
})

export class RoutingModule { }
