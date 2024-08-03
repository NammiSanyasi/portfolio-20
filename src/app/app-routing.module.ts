import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path:'project/:id',component:ProjectComponent},
  { path: '**', component: NotfoundPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
