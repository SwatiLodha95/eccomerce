import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-cosmatics1',
  templateUrl: './cosmatics1.component.html',
  styleUrls: ['./cosmatics1.component.css']
})
export class Cosmatics1Component implements OnInit {
name = "";
image = "";
price = "";


  constructor(private commonservice: CommonService) { 
    [this.name, this.image, this.price] = this.commonservice.arr;
  }

  ngOnInit(): void {
  }

}
