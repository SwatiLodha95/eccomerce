import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
private content = new BehaviorSubject<string>("Default Data")
arr : string[] = [];
  constructor( ) { }
}
