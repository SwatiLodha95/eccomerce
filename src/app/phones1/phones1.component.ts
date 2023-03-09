import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-phones1',
  templateUrl: './phones1.component.html',
  styleUrls: ['./phones1.component.css']
})
export class Phones1Component implements OnInit {
name = "";
image = "";
price = "";

  constructor(private commonservice: CommonService) {
[this.name,this.image,this.price] = this.commonservice.arr
   }

  ngOnInit(): void {
  }

}
