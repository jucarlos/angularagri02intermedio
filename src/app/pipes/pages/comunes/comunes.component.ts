import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styleUrls: ['./comunes.component.css']
})
export class ComunesComponent implements OnInit {

  nombre: string = 'curso de anGULAr';

  precio: number = 34527.123456;

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
