import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { FormService } from '../form.service';
import videos from 'src/assets/json/courses.json';


@Component({
  selector: 'app-videoform',
  templateUrl: './videoform.component.html',
  styleUrls: ['./videoform.component.css']
})
export class VideoformComponent implements OnInit {

  private routeSub: any;
  private req: any;
  show = false;
  code: string;
  courses: string;
  public course_list: {
    course: 'string',
    language: 'string',
    speaker: 'string',
    t_lectures: 'string',
    image: 'string',
    level: 'string',
    link: 'string',
  }[] = videos;

  constructor(private route: ActivatedRoute, private http: HttpClient, private api: FormService) {
  }

  onSubmit(data) {
    this.code = data.value['code']
    this.courses = data.value['course']
    this.api.postapi(data.value).subscribe()
    this.show = true
    data.reset()
  }
  closealert() {
    this.show = false
  }

  ngOnInit(): void {
  }

}
