import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sunglass',
  templateUrl: './sunglass.component.html',
  styleUrls: ['./sunglass.component.css']
})
export class SunglassComponent implements OnInit {
  time = "1667905756";

  constructor(private commonservice: CommonService, private router: Router) { }

  ngOnInit(): void {
  }
sun(name: string, image: string, price: string){
this.commonservice.arr = [name,image,price]
this.router.navigateByUrl('sunglasses1')
}
}
