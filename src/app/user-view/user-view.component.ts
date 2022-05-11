import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  currentUserId=1;

  constructor(private activatedRoute:ActivatedRoute) { 
   this.currentUserId = this.activatedRoute.snapshot.params['id'] 
    
  }

  

  ngOnInit(): void {
  }

}
