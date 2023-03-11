import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceViewComponent } from './components/experience-view/experience-view.component';
import { ProfileOverviewComponent } from './components/profile-overview/profile-overview.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
