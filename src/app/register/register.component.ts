import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

 time = "1667905756";
//  isShow = false;
 registerForm = new FormGroup({

// name: new FormControl('',[Validators.required]),
email: new FormControl('',[Validators.required,Validators.email]),
// number: new FormControl('',[Validators.required]),
password: new FormControl('',[Validators.required])
})

constructor(private router: Router, private authservice: AuthService){

}
log(){
  this.router.navigateByUrl("login")
}


onSubmit(registerForm: FormGroup){
  if (registerForm.valid) {
    this.authservice.login(registerForm.value.email, registerForm.value.password)
      .then(data => {
        alert("Registration is Successful");
        this.router.navigate(['/sucess']);
      }).catch(error => {
           alert(error);
      })
  }

  else {
    alert("All fields are Mandatory"); 
  }
 }
  
}//     }  }
//   this.isShow = true;
// console.log(`Valid Form = ${registerForm.valid}`);
// console.log(`Valid Form = ${registerForm.value.name}`);
// console.log(`Valid Form = ${registerForm.value.mail}`);
// console.log(`Valid Form = ${registerForm.value.number}`);
// console.log(`Valid Form = ${registerForm.value.password}`);
// }
// }

