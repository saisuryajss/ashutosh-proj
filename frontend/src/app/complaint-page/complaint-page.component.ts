import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaint-page',
  templateUrl: './complaint-page.component.html',
  styleUrls: ['./complaint-page.component.css']
})
export class ComplaintPageComponent {
  constructor(private router:Router,private http:HttpClient){}
complaint_submit(data:any){
  console.log(data,localStorage.getItem('username'))
 this.http.post('https://nitkkr-complaints.onrender.com/api/worker/'+localStorage.getItem('worker'),{complaint:data.complaint,username:localStorage.getItem('username')}).subscribe(res=>{
  console.log('res',res)
 })
}
}
