import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fasion',
  templateUrl: './fasion.component.html',
  styleUrls: ['./fasion.component.css']
})
export class FasionComponent implements OnInit {
  time = "1667905756";
  
constructor(private commonservice: CommonService,private router: Router) { }

  ngOnInit(): void {
  }
fasion(name: string, image: string,price:string){
this.commonservice.arr = [name,image,price];
this.router.navigateByUrl('fasion1')
}
}
