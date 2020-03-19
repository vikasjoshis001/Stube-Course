import { Component, OnInit,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getUrlScheme } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';
import videos from 'src/assets/json/courses.json';


@Component
({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy
{
  private routeSub:any;
  link="string";
  // C dict
  C = ["Bjzfag1zZPg","__JKmT5EFb8","92HLfZHH814","4RvPihzs6uw","HXkuoR63_Ts","dw889ubtFR8","FZE_uBFkbqU","iKyYV-BbPCg","gIxYS1n00g0"];
  // C dict

  // Angular dict
  Angular = ["9wc8Gv8X49U","8QOzAmWyouA","OuKO2dVU0U","XGEsZmoZNbw","E1lSYoLf5P4","uBeDt_poi00","1GnMB9ge6tg","N0ldJ9jITE8","6wD4V0rvlDI","nzyJ9imm29w",];
  // Angular dict

  // Normal dict
  public course_list:{
    course:'string',
    language:'string',
    speaker:'string',
    t_lectures:'string',
    image:'string',
    level:'string',
    link:'string',
  } []=videos;
  
  // Normal dict


  constructor(private sanitizer:DomSanitizer , private route:ActivatedRoute) 
  { }

  ngOnInit(): void 
  {
    this.routeSub = this.route.params.subscribe(params=>{
         this.link = params['link']   
      })
  }

  ngOnDestroy(): void 
  {
    this.routeSub.unsubscribe()
  }

  // Embeded Videos

          // Angular 9.0
  getangular(video)
    {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ video + '?start=5');  
    }

          // C programming
  getC(video)
    {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ video + '?start=5');  
    }
        

}
