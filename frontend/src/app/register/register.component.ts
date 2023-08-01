import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http:HttpClient , private router:Router){}
  register(data:any){

    console.log("inside register function",data)
    this.http.post("http://localhost:3000/api/data",data).subscribe(res=>{
      console.log(res)
      this.router.navigate([''])
    })
  }
}
