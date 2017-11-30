import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { NavComponent } from './public/nav/nav.component';
import { BlogComponent } from './public/blog/blog.component';

import { BlogService } from './_services/blog.service';
import { AboutComponent } from './public/about/about.component';
import { OurCompanyComponent } from './public/about/our-company/our-company.component';
import { OurTeamComponent } from './public/about/our-team/our-team.component';
import { ServicesComponent } from './public/services/services.component';
import { HabilitativeSupportComponent } from './public/services/habilitative-support/habilitative-support.component';
import { ContactComponent } from './public/contact/contact.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { FooterComponent } from './public/footer/footer.component';
import { LoginComponent } from './public/login/login.component';

import { LengthPipe } from './_pipes/length.pipe';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { SiteLayoutComponent } from './public/site-layout/site-layout.component';
import { AppLayoutComponent } from './private/app-layout/app-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    AboutComponent,
    OurCompanyComponent,
    OurTeamComponent,
    ServicesComponent,
    HabilitativeSupportComponent,
    ContactComponent,
    PageNotFoundComponent,
    FooterComponent,
    LoginComponent,
    LengthPipe,
    DashboardComponent,
    SiteLayoutComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
