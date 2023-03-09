import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-fasion1',
  templateUrl: './fasion1.component.html',
  styleUrls: ['./fasion1.component.css']
})
export class Fasion1Component implements OnInit {
  name ="";
  image = "";
  price = "";
  constructor(private commomservice : CommonService) { 
[this.name,this.image,this.price] = this.commomservice.arr
  }
  ngOnInit(): void {
  }

}
