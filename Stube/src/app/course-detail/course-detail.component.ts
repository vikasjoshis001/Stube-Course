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

  // C = ["Bjzfag1zZPg", "__JKmT5EFb8", "4RvPihzs6uw", "HXkuoR63_Ts", "dw889ubtFR8", "FZE_uBFkbqU", "iKyYV-BbPCg", "gIxYS1n00g0"];

  // Angular = ["9wc8Gv8X49U", "8QOzAmWyouA", "XGEsZmoZNbw","XGEsZmoZNbw","E1lSYoLf5P4", "uBeDt_poi00", "1GnMB9ge6tg", "N0ldJ9jITE8", "6wD4V0rvlDI", "nzyJ9imm29w",];
  C = []
  Angular = []
  Django2 = []
  Django22 = []
  Typescript = []
  Web = []
  ML = []
  Java = []

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
        if (val['course'] == 'Angular') {
          this.Angular.push(val['code'])
          console.log(this.Angular)
        }
        else if (val['course'] == 'C') {
          this.C.push(val['code'])
          console.log(this.C)
        }
        else if (val['course'] == 'Django2') {
          this.Django2.push(val['code'])
          console.log(this.Django2)
        }
        else if (val['course'] == 'Django22') {
          this.Django22.push(val['code'])
          console.log(this.Django22)
        }
        else if (val['course'] == 'Typescript') {
          this.Typescript.push(val['code'])
          console.log(this.Typescript)
        }
        if (val['course'] == 'Web') {
          this.Web.push(val['code'])
          console.log(this.Web)
        }
        else if (val['course'] == 'ML') {
          this.ML.push(val['code'])
          console.log(this.ML)
        }
        else if (val['course'] == 'Java') {
          this.Java.push(val['code'])
          console.log(this.Java)
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
