import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BlogComponent } from './blog/blog.component';

import { BlogService } from './_services/blog.service';
import { AboutComponent } from './about/about.component';
import { OurCompanyComponent } from './about/our-company/our-company.component';
import { OurTeamComponent } from './about/our-team/our-team.component';
import { ServicesComponent } from './services/services.component';
import { HabilitativeSupportComponent } from './services/habilitative-support/habilitative-support.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { LengthPipe } from './_pipes/length.pipe';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


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
    DashboardComponent
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
