import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-crock',
  templateUrl: './crock.component.html',
  styleUrls: ['./crock.component.css']
})
export class CrockComponent implements OnInit {
time = "1667905756";
  constructor(private router: Router, private commonservice: CommonService) { }

  ngOnInit(): void {
  }
cro(name:string, image: string, price: string){
this.commonservice.arr = [name,image,price];
this.router.navigateByUrl('crock1')
}
}
