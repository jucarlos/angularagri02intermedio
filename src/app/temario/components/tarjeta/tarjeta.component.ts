import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tema } from '../../interfaces/tema-interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() temaDelaTarjeta!: Tema;
  @Output() meGustaEmiter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  meGusta() {
    this.temaDelaTarjeta.meGusta++;
    this.meGustaEmiter.emit(1);
  }

}
