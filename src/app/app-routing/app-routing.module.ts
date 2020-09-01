import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from '../views/contact/contact.component';
import { AtmHomeComponent } from '../views/atm-home/atm-home.component';

//import the component associated with routes

const routes: Routes = [
  // { path: '', redirectTo: 'atm-home', pathMatch: 'full' },
  { path: 'atm-home', component: AtmHomeComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
