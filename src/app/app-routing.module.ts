import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Public routes
import { HomeComponent } from './public/home/home.component';
import { BlogComponent } from './public/blog/blog.component';
import { AboutComponent } from './public/about/about.component';
import { HabilitativeSupportComponent } from './public/services/habilitative-support/habilitative-support.component';
import { ContactComponent } from './public/contact/contact.component';
import { OurCompanyComponent } from './public/about/our-company/our-company.component';
import { OurTeamComponent } from './public/about/our-team/our-team.component';
import { LoginComponent } from './public/login/login.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { SiteLayoutComponent } from './public/site-layout/site-layout.component';
import { BlogDetailsComponent } from './public/blog-details/blog-details.component';

// Private Routes
import { AppLayoutComponent } from './private/app-layout/app-layout.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { BlogPostsComponent } from './private/manage/blog-posts/blog-posts.component';
import { PostComponent } from './private/manage/blog-posts/post/post.component';
import { UsersComponent } from './private/manage/users/users.component';
import { UserComponent } from './private/manage/users/user/user.component';
import { JobPostingsComponent } from './private/manage/job-postings/job-postings.component';
import { NewJobOpeningComponent } from './private/manage/job-postings/new-job-opening/new-job-opening.component';
import { TeamMembersComponent } from './private/manage/team-members/team-members.component';
import { TeamMemberComponent } from './private/manage/team-members/team-member/team-member.component';
import { CompanyNewsComponent } from './private/manage/company-news/company-news.component';
import { NewsArticleComponent } from './private/manage/company-news/news-article/news-article.component';
import { ManageTrainingVideosComponent } from './private/manage/manage-training-videos/manage-training-videos.component';
import { ManageTrainingDocsComponent } from './private/manage/manage-training-docs/manage-training-docs.component';
import { TrainingVideosComponent } from './private/training/training-videos/training-videos.component';
import { TrainingDocsComponent } from './private/training/training-docs/training-docs.component';

const routes: Routes = [
  // App routes
  {
    path: 'dashboard',
    component: AppLayoutComponent,
    children: [
      { path: 'manage/blog-posts', component: BlogPostsComponent },
      { path: 'manage/blog-posts/post', component: PostComponent },
      { path: 'manage/blog-posts/post/:id', component: PostComponent },
      { path: 'manage/users', component: UsersComponent },
      { path: 'manage/users/add-user', component: UserComponent },
      { path: 'manage/users/edit-user/:id', component: UserComponent},
      { path: 'manage/job-postings', component: JobPostingsComponent },
      { path: 'manage/job-postings/new-job-opening', component: NewJobOpeningComponent },
      { path: 'manage/job-postings/new-job-opening/:id', component: NewJobOpeningComponent },
      { path: 'manage/team-members', component: TeamMembersComponent },
      { path: 'manage/team-members/team-member', component: TeamMemberComponent },
      { path: 'manage/team-members/team-member/:id', component: TeamMemberComponent },
      { path: 'manage/company-news', component: CompanyNewsComponent },
      { path: 'manage/company-news/:id', component: NewsArticleComponent },
      { path: 'manage/company-news/add-company-news', component: NewsArticleComponent },
      { path: 'manage/manage-training-videos', component: ManageTrainingVideosComponent },
      { path: 'manage/manage-training-docs', component: ManageTrainingDocsComponent },
      { path: 'training/videos', component: TrainingVideosComponent },
      { path: 'training/docs', component: TrainingDocsComponent },
      { path: '', component: DashboardComponent }
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
      { path: 'blog-details/:id', component: BlogDetailsComponent },
      { path: 'services/habilitative-support', component: HabilitativeSupportComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]
  },

  { path: '**', component: PageNotFoundComponent }


  // no layout routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
