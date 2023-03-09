import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
title = "E-Commerce";
time = "1667905756";
isShow = false;
contactForm = new FormGroup({      

mail: new FormControl('',[Validators.required, Validators.email]),
password: new FormControl('', [Validators.required])

})
constructor(private router: Router,private authservice: AuthService){

}
onSubmit(contactForm: FormGroup){
  if (contactForm.valid) {
    this.authservice.login(contactForm.value.mail, contactForm.value.password)
      .then(data => {
        alert("Login is Successful");
        this.router.navigate(['/home']);
      }).catch(error => {
           alert(error);
      })
  }

  else {
    alert("All fields are Mandatory"); 
  }
 }

// 
 signup(){
  
  this.router.navigateByUrl("register")
}
  // this.isShow = true;
  // console.log(`Valid Form = ${contactForm.valid }`);
  //fetching values//
  // console.log(`Valid Form = ${contactForm.value.mail}`);
  // console.log(`Valid Form = ${contactForm.value.password}`);
  // console.log(this.contactForm.value)
}
  // log(){
  //   this.isShow = !this.isShow;
  // }
  
