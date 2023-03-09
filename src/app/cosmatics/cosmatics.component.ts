import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cosmatics',
  templateUrl: './cosmatics.component.html',
  styleUrls: ['./cosmatics.component.css']
})
export class CosmaticsComponent implements OnInit {
  time = "1667905756";
  constructor(private commonservice: CommonService,private router: Router) { }

  ngOnInit(): void {
  }
cos(name: string, image: string, prize: string){
this.commonservice.arr = [name, image, prize]
this.router.navigateByUrl('cosmatics1')
}
}

