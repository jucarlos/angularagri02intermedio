import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizados',
  templateUrl: './personalizados.component.html',
  styleUrls: ['./personalizados.component.css']
})
export class PersonalizadosComponent implements OnInit {

  frase = 'En un lugar de la mancha de cuyo nombre';

  constructor() { }

  ngOnInit(): void {
  }

}
