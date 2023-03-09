import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  time = "1667905756"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
pass(){
  this.router.navigateByUrl("sucess")
}
}
