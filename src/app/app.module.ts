import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { ServicesComponent } from './header/services/services.component';
import { ScraprateComponent } from './header/scraprate/scraprate.component';
import { ContactComponent } from './header/contact/contact.component';
import { SigninComponent } from './header/signin/signin.component';
import { AboutComponent } from './header/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    ScraprateComponent,
    ContactComponent,
    SigninComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
