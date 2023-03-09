import { Component, OnInit } from '@angular/core';
import { BuyService } from './buy.service';

@Component({
  selector: 'app-cloth1',
  templateUrl: './cloth1.component.html',
  styleUrls: ['./cloth1.component.css']
})
export class Cloth1Component implements OnInit {
  name = "";
  image = "";
  price = "";

  constructor(private buyService: BuyService) { 
    [this.name, this.image, this.price] = this.buyService.arr;
  }

  ngOnInit(): void {
  }

}
