import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avanzados',
  templateUrl: './avanzados.component.html',
  styleUrls: ['./avanzados.component.css']
})
export class AvanzadosComponent implements OnInit {

  alumnos = ['Ana', 'Carlos', 'Juan', 'Pedro'];
  
 // i18nPluran
 alumnosMap = {
  '=0': 'No hay alumnos matriculados',
  '=1': 'Hay un alumno matriculado',
  'other': 'Hay # alumnos matriculados'
 }




  // i18nSelect
  persona = {
    nombre: 'Ana',
    sexo: 'M'
  };

  generoMap = {
    'H': 'invitado',
    'M': 'invitada'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
