import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-smart-watch1',
  templateUrl: './smart-watch1.component.html',
  styleUrls: ['./smart-watch1.component.css']
})
export class SmartWatch1Component implements OnInit {
  name = "";
  image = "";
  price = "";
  
  constructor(private commonservice: CommonService) { 
[this.name,this.image,this.price] = this.commonservice.arr
  }

  ngOnInit(): void {
  }
}
