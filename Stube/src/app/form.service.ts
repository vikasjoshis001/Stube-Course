import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  url = 'https://stube-store.herokuapp.com/video/'

  getapi() {
    return this.http.get(this.url)
  }

  postapi(data) {
    return this.http.post(this.url, data)
  }
}
