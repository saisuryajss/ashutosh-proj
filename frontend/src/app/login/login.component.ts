import { Component } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit(){
    let x= screen.availHeight;
    console.log(x)
  }
  constructor(private router:Router,private http:HttpClient){}

  login_verify(data:any){
    let verify_data={
      username:(data.input1.split(' '))[0],
      password:data.input2
    };
    console.log(verify_data,"data")
    this.http.post('https://nitkkr-complaints.onrender.com/api',verify_data).subscribe(res=>{

      if(Object.keys(res)[0]=='true'){
        localStorage.setItem('username',verify_data.username)
        localStorage.setItem('password',verify_data.password)
        this.router.navigate([`/dashboard`])
        document.getElementById('invalid')?.setAttribute('style','display:none;color:red')
      }
      else{
        console.log("Invalid Username or Password")
        document.getElementById('invalid')?.setAttribute('style','display:block;color:red')
        setTimeout(()=>{
          document.getElementById('invalid')?.setAttribute('style','display:none;color:red')
        },2000)
      }
    })

  }
  signup(event:any){
    event.target.style.opacity=1
  }
  signup_leave(event:any){
    event.target.style.opacity=0.3
  }
  register(){
    console.log("inside")
    this.router.navigate(['/register'])
  }

}
