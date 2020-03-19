import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import videos from 'src/assets/json/courses.json';


@Component
({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit,OnDestroy {
  
  private req:any;
  title = "Course List"
  public course_list:{
    course:'string',
    language:'string',
    speaker:'string',
    t_lectures:'string',
    image:'string',
    level:'string',
    link:'string',
  } []=videos;
  
  constructor(private route:ActivatedRoute) 
  { }

  ngOnInit()
  {
    // console.log(course)
      this.route.params.subscribe(params => {
        console.log(params)

      })

      // this.req = this.http.get("src/assets/json/courses.json").subscribe.map(data=>{
      // console.log(data.json())
      // this.course_list = data.json() as [any];

      // })

  }

  ngOnDestroy()
  {
      this.req.unsubscribe()
  }



}
