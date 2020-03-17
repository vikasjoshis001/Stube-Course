import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,OnDestroy{
  private routeSub:any;
  link = 'string';
  title = "Mostly Viewed courses"
  recommended_course = 
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
      course     : "Machine Learning Course",
      language   : "Hindi",
      speaker    : "Sourabh Shukla",
      t_lectures : "41",
      image      : "assets/images/ML.png",
      level      : "Beginner",
      link       : "Machine Learning -by Sourabh Shukla",

    },
    {
      course     : "Java Basics",
      language   : "Hindi",
      speaker    : "Sourabh Shukla",
      t_lectures : "41",
      image      : "assets/images/java.jpeg",
      level      : "Beginner",
      link       : "Java -by Sourabh Shukla",

    },
  ]

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params=>{
      this.link=params['link']
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

}
