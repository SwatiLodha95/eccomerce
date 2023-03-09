import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent {
  time = "1667905756";
  constructor(private router: Router) { }

 
pic(){
  this.router.navigateByUrl("https://t4.ftcdn.net/jpg/03/12/04/19/360_F_312041919_VNGJEqtwFNNPlr6dEsIYf1wROfORYcUt.jpg");
  this.router.navigateByUrl("home")
  alert("Password Change Successfully")
}
}
