import { Component, OnInit } from '@angular/core';
import { FootService } from '../footwear1/foot.service';

@Component({
  selector: 'app-footware1',
  templateUrl: './footware1.component.html',
  styleUrls: ['./footware1.component.css']
})
export class Footware1Component implements OnInit {
  name = "";
  image = "";
  price = "";

  constructor(private footservice: FootService) {
    [this.name, this.image, this.price] = this.footservice.arr;
   }

  ngOnInit(): void {
  }

}
