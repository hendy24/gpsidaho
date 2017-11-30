import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { BlogComponent } from './public/blog/blog.component';
import { AboutComponent } from './public/about/about.component';
import { HabilitativeSupportComponent } from './public/services/habilitative-support/habilitative-support.component';
import { ContactComponent } from './public/contact/contact.component';
import { OurCompanyComponent } from './public/about/our-company/our-company.component';
import { OurTeamComponent } from './public/about/our-team/our-team.component';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { SiteLayoutComponent } from './public/site-layout/site-layout.component';
import { AppLayoutComponent } from './private/app-layout/app-layout.component';

const routes: Routes = [
  // App routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'admin', component: DashboardComponent }
    ]
  },

  // Site routes
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'about/our-company', component: OurCompanyComponent },
      { path: 'about/our-team', component: OurTeamComponent },
      { path: 'about/our-team/:id', component: OurTeamComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/:id', component: BlogComponent },
      { path: 'services/habilitative-support', component: HabilitativeSupportComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }


  // no layout routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
