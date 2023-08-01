import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent {
  constructor(private http:HttpClient,private router:Router){}
mouse(event:any){
  event.target.style.opacity=1
}
mouse_out(event:any){
  event.target.style.opacity=0.8
}
worker(event:any){

    localStorage.setItem('worker',event.target.id)
    this.router.navigate([`worker`])
}
image(event:any){
  console.log("image insided")
  event.target.style.border='0.2vw solid black';
  event.target.style.borderRadius='100%';
}
image_out(event:any){
  event.target.style.border=null;
  event.target.style.borderRadius='100%';
}
profile(){
  this.router.navigate(['profile'])
}

}
