import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  cloth(){
    this.router.navigateByUrl('cloth')
  }
  cosm(){
    this.router.navigateByUrl('cosmatics')
  }
  foot(){
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
