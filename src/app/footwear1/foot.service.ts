import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FootService {
private content = new BehaviorSubject<string>("default data")
arr : string[] = [];
  constructor() { }

}
