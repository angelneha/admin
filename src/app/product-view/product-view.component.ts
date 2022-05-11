import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
 currentProductId=1;
  constructor(private activatedRoute:ActivatedRoute) {
    this.currentProductId = this.activatedRoute.snapshot.params['id']
   }

  ngOnInit(): void {
  }

}
