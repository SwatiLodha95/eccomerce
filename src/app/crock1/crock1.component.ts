import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-crock1',
  templateUrl: './crock1.component.html',
  styleUrls: ['./crock1.component.css']
})
export class Crock1Component implements OnInit {
name = "";
image = "";
price = "";
  constructor(private commonservice: CommonService) {
    [this.name,this.image,this.price] = this.commonservice.arr
   }

  ngOnInit(): void {
  }

}
