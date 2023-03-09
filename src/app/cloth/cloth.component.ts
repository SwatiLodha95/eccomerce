import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from '../cloth1/buy.service';
@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {
  time = "1667905756";
  constructor(private router: Router, private buyService: BuyService) { }

  ngOnInit(): void {
  }
  cloth1(name: string, image: string, price:string){
    this.buyService.arr = [name, image, price];
    this.router.navigateByUrl('cloth1')
  }
}
