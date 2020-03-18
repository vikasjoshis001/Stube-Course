import { Component, OnInit,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getUrlScheme } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';
// -- import { HttpClientModule } from '@angular/common/http';


@Component
({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy
{
  private routeSub:any;
  link="string";
  // C dict
  C = ["Bjzfag1zZPg","__JKmT5EFb8","92HLfZHH814","4RvPihzs6uw","HXkuoR63_Ts","dw889ubtFR8","FZE_uBFkbqU","iKyYV-BbPCg","gIxYS1n00g0"];
  // C dict

  // Angular dict
  Angular = ["9wc8Gv8X49U","8QOzAmWyouA","OuKO2dVU0U","XGEsZmoZNbw","E1lSYoLf5P4","uBeDt_poi00","1GnMB9ge6tg","N0ldJ9jITE8","6wD4V0rvlDI","nzyJ9imm29w",]
  // Angular dict

  // Normal dict
  course_list =
  [
    {
      course     : "Angular 9.0",
      language   : "English",
      speaker    : "Justin Mitchel",
      t_lectures : "28",
      image      : "assets/images/Angular.png",
      level      : "Beginner",
      link       : "Angular 9.0 -by Justin Mitchel",

    },
    {
      course     : "C programming Basics",
      language   : "Hindi",
      speaker    : "Sourabh Shukla",
      t_lectures : "41",
      image      : "assets/images/C .png",
      level      : "Beginner",
      link       : "C programming Basics -by Sourabh Shukla",

    },
    {
      course     : "Django 2.0",
      language   : "English",
      speaker    : "Justin Mitchel",
      t_lectures : "48",
      image      : "assets/images/django.jpg",
      level      : "Beginner",
      link       : "Django 2.0 -by Justin Mitchel",

    },
    {
      course     : "Django 2.2",
      language   : "English",
      speaker    : "Justin Mitchel",
      t_lectures : "48",
      image      : "assets/images/django 2.2.jpeg",
      level      : "Intermediate",
      link       : "Django 2.2 -by Justin Mitchel",

    },
    {
      course     : "Typescript",
      language   : "English",
      speaker    : "Justin Mitchel",
      t_lectures : "11",
      image      : "assets/images/typescript.png",
      level      : "Beginner",
      link       : "Typescript -by Justin Mitchel",

    },
    {
      course     : "Web Development - HTML,CSS,Javascript,Jquery,PHP,Mysql",
      language   : "Hindi",
      speaker    : "Sourabh Shukla",
      t_lectures : "41",
      image      : "assets/images/web.jpg",
      level      : "Beginner",
      link       : "Web Development -by Sourabh Shukla",

    },
  ]
  // Normal dict


  constructor(private sanitizer:DomSanitizer , private route:ActivatedRoute) 
  { }

  ngOnInit(): void 
  {
    this.routeSub = this.route.params.subscribe(params=>{
         this.link = params['link']   

      })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

  // Embeded Videos

          // Angular 9.0
  getangular(video)
    {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ video + '?start=5');  
    }

          // C programming
  getC(video)
    {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ video + '?start=5');  
    }
        

}
