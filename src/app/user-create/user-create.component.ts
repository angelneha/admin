import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm:FormGroup;
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
    this.userForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.email,Validators.required]),
      states: new FormControl(''),
      country: new FormControl(''),
    });
   }

  ngOnInit(): void {}

  postData() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.http
        .post(
          'https://627344e36b04786a0903a375.mockapi.io/students',
          this.userForm.value
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
