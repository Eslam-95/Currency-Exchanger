import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnteredAmountService {
  enteredAmount: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}
}
