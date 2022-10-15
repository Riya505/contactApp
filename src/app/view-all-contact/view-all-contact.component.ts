import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-contact',
  templateUrl: './view-all-contact.component.html',
  styleUrls: ['./view-all-contact.component.css']
})
export class ViewAllContactComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewContact().subscribe(
      (data)=>{
        this.contactData=data
      }
    )
   }

  contactData:any={}

  ngOnInit(): void {
  }

}
