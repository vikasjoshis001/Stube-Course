import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { HttpClient } from '@angular/common/http';
import videos from 'src/assets/json/courses.json';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  private routeSub: any;
  private req: any;
  title1 = "Data to update"
  title2 = "updated data"
  number;
  course;
  Data;
  Value;
  id;
  show = false;
  showupdate = false;
  error = false;

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

  onSubmittut(data) {
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
            found = true;
            this.show = true;
          }
        }
        total_count += 1
      }
      if (!found) {
        this.error = true;
      }
    })
  }

  onSubmit(data) {
    var urls = 'https://stube-store.herokuapp.com/' + this.id + '/'
    this.http.put(urls, data.value).subscribe(result => {
    });
    this.showupdate = true;
    data.reset()

  }

  closealert() {
    this.show = false;
    this.error = false;
    this.showupdate = false;

  }
  ngOnInit(): void {
  }

}
