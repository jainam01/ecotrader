import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { ServicesComponent } from './header/services/services.component';
import { ScraprateComponent } from './header/scraprate/scraprate.component';
import { ContactComponent } from './header/contact/contact.component';
import { SigninComponent } from './header/signin/signin.component';
import { AboutComponent } from './header/about/about.component';
import { BodyComponent } from './Body/body/body.component';
import { RecyclableComponent } from './Body/body/Recyclables/recyclable/recyclable.component';
import { LargeappliancesComponent } from './Body/body/Large Appliances/largeappliances/largeappliances.component';
import { SmallapplianceComponent } from './Body/body/smallappliances/smallappliance/smallappliance.component';
import { MobilecomputerComponent } from './Body/body/Mobiles & Computers/mobilecomputer/mobilecomputer.component';
import { OtherComponent } from './Body/body/other/other/other.component';
import { FooterComponent } from './footer/footer/footer.component';



const appRoutes : Routes = [
  { path:'' , component : HomeComponent },
  { path:'Services' , component : ServicesComponent },
  { path:'Scraprate' , component : ScraprateComponent },
  { path:'Contact' , component : ContactComponent },
  { path:'Signin' , component : SigninComponent },
  { path:'About' , component : AboutComponent }

]

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
    BodyComponent,
    RecyclableComponent,
    LargeappliancesComponent,
    SmallapplianceComponent,
    MobilecomputerComponent,
    OtherComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
