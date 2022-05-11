import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  userList:any

  constructor(private http:HttpClient) {
    this.http.get("https://627344e36b04786a0903a375.mockapi.io/students").subscribe((data)=>{
      console.log(data)
      this.userList=data;
    })
   }

  ngOnInit(): void {
  }

}
