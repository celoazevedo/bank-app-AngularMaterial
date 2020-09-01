import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { BankService } from './bank.service'

import { AppComponent } from './app.component';
import { AtmHomeComponent } from './views/atm-home/atm-home.component';
import { ContactComponent } from './views/contact/contact.component';
import { TellerComponent } from './views/teller/teller.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmHomeComponent,
    ContactComponent,
    TellerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
