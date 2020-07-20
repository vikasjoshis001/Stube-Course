import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import videos from 'src/assets/json/courses.json';


@Component
  ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
  })
export class CourseListComponent implements OnInit, OnDestroy {


  private req: any;
  text: string;
  title = "Course List"
  public course_list: {
    title: 'string',
    course: 'string',
    language: 'string',
    speaker: 'string',
    t_lectures: 'string',
    image: 'string',
    level: 'string',
    link: 'string',
  }[] = videos;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }


  ngOnDestroy() {
  }



}
