import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm =  new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.authForm.valid){
      console.log('invalid')
      return;
    }
    
    fetch(`http://localhost:3000/api/auth?email=${this.authForm.value.email}&password=${this.authForm.value.password}`,{
      method:"post",
  
    }).then(res=>res.json()).then(resp=>{
      if(resp.success){
        this.router.navigate(['api/leave']) 
      }
      else{
        alert("Invalid email or password")
      }
    })
       
  }
  
}
