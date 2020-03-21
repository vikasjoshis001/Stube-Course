import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';


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
    path : "home",
    component : HomePageComponent
  },
  {
    path : "nav",
    component : NavbarComponent
  },
  
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
