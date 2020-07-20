import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { HttpClient } from '@angular/common/http';
import videos from 'src/assets/json/courses.json';

@Component({
  selector: 'app-deleteform',
  templateUrl: './deleteform.component.html',
  styleUrls: ['./deleteform.component.css']
})
export class DeleteformComponent implements OnInit {

  private routeSub: any;
  private req: any;
  number;
  course;
  Data;
  Value;
  id;
  show = false;
  error = false;
  title = "Delete Videos"

  public course_list: {
    title: 'string',
    course: 'string',
    language: 'string',
    speaker: 'string',
    t_lectures: 'string',
    image: 'string',
    level: 'string',
    link: 'string'
  }[] = videos;

  constructor(private api: FormService, private http: HttpClient) { }

  onSubmit(data) {
    this.Data = data.value
    var course_count = 0;
    var total_count = 0;
    this.api.getapi().subscribe(value => {
      this.Value = value
      var found = false;
      for (var i = 0; i < this.Value.length; i++) {
        if (this.Value[i]['course'] == this.Data['course']) {
          course_count += 1
          if (this.Data['number'] == course_count) {
            this.id = i
            console.log(this.id)
            var urls = 'https://stube-store.herokuapp.com/'
            this.http.delete(urls + this.id).subscribe(result => {
            });
            this.show = true;
            found = true;
            data.reset()
          }
        }
        total_count += 1;
      }
      if (!found) {
        this.error = true
      }


    })
  }

  closealert() {
    this.show = false;
    this.error = false;

  }



  ngOnInit(): void {
  }

}
