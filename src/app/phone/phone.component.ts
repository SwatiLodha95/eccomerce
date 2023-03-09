import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
time = "1667905756";
  constructor(private router: Router, private commonservice: CommonService) { }

  ngOnInit(): void {
  }
phone(name: string, image: string, price: string){
 this.commonservice.arr = [name,image,price]
this.router.navigateByUrl('phones1')
}
}
