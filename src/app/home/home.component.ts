import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
time = "1667905756";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cloth(){
    this.router.navigateByUrl('cloth')
  }
  cosmatics(){
    this.router.navigateByUrl('cosmatics')
  }
  footwear(){
    this.router.navigateByUrl('footwear')
  }
  smartwatch(){
    this.router.navigateByUrl('smart-watch')
  }
  fasion(){
    this.router.navigateByUrl('fasion')
  }
  phone(){
    this.router.navigateByUrl('phone')
  }
  jacket(){
    this.router.navigateByUrl('jacket')
  }
  sunglass(){
    this.router.navigateByUrl('sunglass')
  }
  crock(){
   this.router.navigateByUrl('crock')
  }
}
