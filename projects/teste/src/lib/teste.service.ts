import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor() { }


  callme() {
    console.log('call me');
  }
}
