import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = 
[
  {
    path : "course-list",
    component : CourseListComponent
  },
  {
    path : "course-list/:link",
    component : CourseDetailComponent
  },
  {
    path : "",
    component : HomePageComponent
  },
  {
    path : "home",
    component : HomePageComponent
  },
  {
    path : "nav",
    component : NavbarComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
