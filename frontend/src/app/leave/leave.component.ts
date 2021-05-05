import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  forLeave = new FormGroup({
    reason: new FormControl(),
    from: new FormControl(),
    to: new FormControl()
  });
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    if(!this.forLeave.valid){
      return;
    }
    console.log(this.forLeave.value)
    fetch(`http://localhost:3000/api/leaves?reason=${this.forLeave.value.reason}&from=${this.forLeave.value.from}&to=${this.forLeave.value.to}`,{
      method:"post",
  
    }).then(res=>res.json()).then(resp=>console.log(resp))
    this.router.navigate(['api/success']);
  }      

}
