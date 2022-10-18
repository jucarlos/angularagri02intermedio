import { Component, OnInit } from '@angular/core';
import { TEMARIO } from '../../data/data-temas';
import { Tema } from '../../interfaces/tema-interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  temario: Tema[] = [];

  constructor() { }

  ngOnInit(): void {
    this.temario = TEMARIO;
 
  }

  meGusta( event: number) {
    console.log('Evento desde la tarjeta');
    
  }

}
