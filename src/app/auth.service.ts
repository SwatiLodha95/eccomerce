import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }
  login(email: string ,password: string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }
  registration(name:string,email:string,number:string,password: string){
return this.auth.createUserWithEmailAndPassword(email,password)
  }
 
}
