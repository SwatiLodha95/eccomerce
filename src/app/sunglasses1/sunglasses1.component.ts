import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-sunglasses1',
  templateUrl: './sunglasses1.component.html',
  styleUrls: ['./sunglasses1.component.css']
})
export class Sunglasses1Component implements OnInit {
  name = "";
  image = "";
  price = "";
  constructor(private commonservice: CommonService) { 
  [this.name,this.image,this.price] = this.commonservice.arr
  }
  ngOnInit(): void {
  }

}
