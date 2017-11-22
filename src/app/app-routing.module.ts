import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HabilitativeSupportComponent } from './services/habilitative-support/habilitative-support.component';
import { ContactComponent } from './contact/contact.component';
import { OurCompanyComponent } from './about/our-company/our-company.component';
import { OurTeamComponent } from './about/our-team/our-team.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
