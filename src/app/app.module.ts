import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { AboutPageComponent } from './screens/about-page/about-page.component';
import { CommissionPageComponent } from './screens/commission-page/commission-page.component';
import { AdminPageComponent } from './screens/admin-page/admin-page.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterSocialComponent } from './footer-social/footer-social.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    CommissionPageComponent,
    AdminPageComponent,
    HeaderNavComponent,
    FooterSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
