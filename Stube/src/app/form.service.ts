import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  url = 'http://127.0.0.1:8000/video/'

  getapi() {
    return this.http.get(this.url)
  }

  postapi(data) {
    return this.http.post(this.url, data)
  }
}
