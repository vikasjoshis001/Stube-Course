import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import lectures from 'src/assets/json/recommendation.json';
import tutorials from 'src/assets/json/student.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,OnDestroy{
  private routeSub:any;
  link = 'string';
  public recommended_course:{
    course:'string',
    language:'string',
    speaker:'string',
    t_lectures:'string',
    image:'string',
    level:'string',
    link:'string',
  } []=lectures;
  
  public student_course:{
    course:'string',
    language:'string',
    speaker:'string',
    t_lectures:'string',
    image:'string',
    level:'string',
    link:'string',
  } []=tutorials;
  
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
