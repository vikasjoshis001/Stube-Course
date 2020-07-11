import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  products = [{id:'1',title:'VJ'},{id:'2',title:'VIKU BOSS'}];

  constructor(private api:ApiService) {
    this.getProducts();
  }
  getProducts = () => {
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  productClicked = (product) => {

    console.log(product.id);
  }  
}



