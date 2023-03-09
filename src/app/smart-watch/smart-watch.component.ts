import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-smart-watch',
  templateUrl: './smart-watch.component.html',
  styleUrls: ['./smart-watch.component.css']
})
export class SmartWatchComponent implements OnInit {
time = "1667905756"
  constructor(private router: Router, private commonservice: CommonService) { }

  ngOnInit(): void {
  }
smart(name: string, image: string, price: string){
  this.commonservice.arr = [name,image,price]
  this.router.navigateByUrl('smartwatch1')
}
}
