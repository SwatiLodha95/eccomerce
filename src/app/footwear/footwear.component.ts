import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootService } from '../footwear1/foot.service';
@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {
  time = "1667905756"; 
  constructor(private router: Router, private footservice: FootService) { }

  ngOnInit(): void {
  }
foot(name: string, image: string, price:string){
this.footservice.arr = [name, image, price];
this.router.navigateByUrl('footwear1')
}
}
