import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm:FormGroup;
  countryDetails = [
    {
      name : "Tamil Nadu",
      country : "India"
    },
    {
      name : "Kerla",
      country : "India"
    },
    {
      name : "Newyork",
      country : "America"
    },
    {
      name : "Seatle",
      country : "America"
    }
  ]
  selectedState:any = [];

  constructor(private http:HttpClient) {
    this.productForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.email,Validators.required]),
      states: new FormControl(''),
      country: new FormControl(''),
    });
   }

  ngOnInit(): void {}
  postData() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.http
        .post(
          'https://627344e36b04786a0903a375.mockapi.io/products',
          this.productForm.value
        )
        .subscribe((data) => {
          alert('Data Saved');
        });
    } else alert('Not Valid');
  }
  switchState(e:any){
    let states = this.countryDetails.filter(obj => obj.country == e.target.value)
    this.selectedState = states
  }

}
