import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { BlogService } from './_services/blog.service';

// Pipes
import { LengthPipe } from './_pipes/length.pipe';

// Public components
import { SiteLayoutComponent } from './public/site-layout/site-layout.component';
import { HomeComponent } from './public/home/home.component';
import { NavComponent } from './public/nav/nav.component';
import { BlogComponent } from './public/blog/blog.component';
import { AboutComponent } from './public/about/about.component';
import { OurCompanyComponent } from './public/about/our-company/our-company.component';
import { OurTeamComponent } from './public/about/our-team/our-team.component';
import { ServicesComponent } from './public/services/services.component';
import { HabilitativeSupportComponent } from './public/services/habilitative-support/habilitative-support.component';
import { ContactComponent } from './public/contact/contact.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { FooterComponent } from './public/footer/footer.component';
import { LoginComponent } from './public/login/login.component';

// Private components
import { AppLayoutComponent } from './private/app-layout/app-layout.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { DashboardNavComponent } from './private/dashboard-nav/dashboard-nav.component';
import { DashboardFooterComponent } from './private/dashboard-footer/dashboard-footer.component';
import { BlogPostsComponent } from './private/manage/blog-posts/blog-posts.component';
import { UsersComponent } from './private/manage/users/users.component';
import { JobPostingsComponent } from './private/manage/job-postings/job-postings.component';
import { TeamMembersComponent } from './private/manage/team-members/team-members.component';
import { CompanyNewsComponent } from './private/manage/company-news/company-news.component';
import { TrainingVideosComponent } from './private/training/training-videos/training-videos.component';
import { TrainingDocsComponent } from './private/training/training-docs/training-docs.component';
import { ManageTrainingVideosComponent } from './private/manage/manage-training-videos/manage-training-videos.component';
import { ManageTrainingDocsComponent } from './private/manage/manage-training-docs/manage-training-docs.component';
import { PostComponent } from './private/manage/blog-posts/post/post.component';
import { NewJobOpeningComponent } from './private/manage/job-postings/new-job-opening/new-job-opening.component';
import { BlogDetailsComponent } from './public/blog-details/blog-details.component';
import { UserComponent } from './private/manage/users/user/user.component';
import { TeamMemberComponent } from './private/manage/team-members/team-member/team-member.component';
import { NewsArticleComponent } from './private/manage/company-news/news-article/news-article.component';


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
    AppLayoutComponent,
    DashboardNavComponent,
    DashboardFooterComponent,
    BlogPostsComponent,
    UsersComponent,
    JobPostingsComponent,
    TeamMembersComponent,
    CompanyNewsComponent,
    TrainingVideosComponent,
    TrainingDocsComponent,
    ManageTrainingVideosComponent,
    ManageTrainingDocsComponent,
    PostComponent,
    NewJobOpeningComponent,
    BlogDetailsComponent,
    UserComponent,
    TeamMemberComponent,
    NewsArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
