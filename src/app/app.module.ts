import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileOverviewComponent } from './components/profile-overview/profile-overview.component';
import { ExperienceViewComponent } from './components/experience-view/experience-view.component';
import { ProjectsViewComponent } from './components/projects-view/projects-view.component';
import { CertificatesViewComponent } from './components/certificates-view/certificates-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { SkillsViewComponent } from './components/skills-view/skills-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileOverviewComponent,
    ExperienceViewComponent,
    ProjectsViewComponent,
    CertificatesViewComponent,
    SkillsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
