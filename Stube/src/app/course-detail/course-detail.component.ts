import { Component, OnInit, OnDestroy, Input, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getUrlScheme } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormService } from '../form.service';
import videos from 'src/assets/json/courses.json';



@Component
  ({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
  })

export class CourseDetailComponent implements OnInit, OnDestroy {

  private routeSub: any;
  link = "string";
  Data;

  C = []
  Angular4 = []
  Django2 = []
  Django22 = []
  Typescript = []
  Web = []
  ML = []
  Java = []
  Angular9 = []
  ReactJS = []
  Python = []
  NodeJS = []

  public course_list: {
    course: 'string',
    language: 'string',
    speaker: 'string',
    t_lectures: 'string',
    image: 'string',
    level: 'string',
    link: 'string',
  }[] = videos;


  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private http: HttpClient, private api: FormService) {
    api.getapi().subscribe(data => {
      this.Data = data
      for (var val of this.Data) {
        if (val['course'] == 'Angular4') {
          this.Angular4.push(val['code'])
        }
        else if (val['course'] == 'C') {
          this.C.push(val['code'])
        }
        else if (val['course'] == 'Django2') {
          this.Django2.push(val['code'])
        }
        else if (val['course'] == 'Django22') {
          this.Django22.push(val['code'])
        }
        else if (val['course'] == 'Typescript') {
          this.Typescript.push(val['code'])
        }
        if (val['course'] == 'Web') {
          this.Web.push(val['code'])
        }
        else if (val['course'] == 'ML') {
          this.ML.push(val['code'])
        }
        else if (val['course'] == 'Java') {
          this.Java.push(val['code'])
        }
        else if (val['course'] == 'Angular9') {
          this.Angular9.push(val['code'])
        }
        else if (val['course'] == 'ReactJS') {
          this.ReactJS.push(val['code'])
        }
        else if (val['course'] == 'Python') {
          this.Python.push(val['code'])
        }
        else if (val['course'] == 'NodeJS') {
          this.NodeJS.push(val['code'])
        }
      }
    })
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(para => {
      this.link = para['link']
    })
  }

  ngOnDestroy(): void {
  }

  getcourse(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video + '?start=5');
  }
}
