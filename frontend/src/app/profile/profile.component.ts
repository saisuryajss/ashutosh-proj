import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile_info:any;
  constructor(private http:HttpClient){}
ngOnInit(){
  console.log("123 profile")
  console.log(localStorage.getItem('username'))
  this.http.get("http://localhost:3000/api/profile/"+localStorage.getItem('username')).subscribe(res=>{
    console.log(res,"profile information is")
    this.profile_info=res
  })

}
check(){
  this.http.get("http://localhost:3000/api/profile/"+localStorage.getItem('username')).subscribe(res=>{
    console.log(res,"profile information is")
    this.profile_info=res
  })
  console.log(localStorage.getItem('username'))

}
}
