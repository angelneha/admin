import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:any

  constructor(private http:HttpClient) {
    this.http.get("https://627344e36b04786a0903a375.mockapi.io/products").subscribe((data)=>{
      console.log(data)
      this.productList=data;
    })
   }

  ngOnInit(): void {
  }

}
