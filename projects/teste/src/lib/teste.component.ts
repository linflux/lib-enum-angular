import { Component, OnInit } from '@angular/core';
import { TesteEnum } from './teste.enum';
import { TesteService } from './teste.service';

@Component({
  selector: 'lib-teste',
  template: `
    <p>
      teste works!
    </p>
  `,
  styles: []
})
export class TesteComponent implements OnInit {

  xxx: TesteEnum;

  constructor(private testeService: TesteService) { }

  ngOnInit() {
  }

}
