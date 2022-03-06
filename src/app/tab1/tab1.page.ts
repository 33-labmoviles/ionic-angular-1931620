import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  alumnos = [{
    "Nombre" : "Luis Enrique",
    "Apellido" : "Martínez Galván",
    "Matricula" : "1961086"
    },
      {
    "Nombre" : "Abraham ",
    "Apellido":"Ramirez",
    "Matricula":"123456"
      },
      {
    "Nombre":"Brian",
    "Apellido":"Esquivel",
    "Matricula":"124699"
      },
      {
    "Nombre":"Diego",
    "Apellido":"Davila",
    "Matricula":"2347448"
      },
      {
    "Nombre":"Diego",
    "Apellido":"Jasso",
    "Matricula":"1985446"
      },
      {
    "Nombre":"Julio",
    "Apellido":"Manuel",
    "Matricula":"1092744"
      },
      {
    "Nombre":"Luis",
    "Apellido":"Armando villanuevas",
    "Matricula":"1756948"
      },
      {
    "Nombre": "Luis",
    "Apellido":"Otiniel Tamez",
    "Matricula":"17458893"
      },
      {
    "Nombre": "Rogel ",
    "Apellido":"Axel",
    "Matricula":"1958647"
      },
      {
    "Nombre":"Luis ",
    "Apellido":"Armando",
    "Matricula":"1234123"
      },
      {
    "Nombre": "Enrique",
    "Apellido": "Santillan",
    "Matricula": "1126479"
      },
      {
    "Nombre": "Sergio",
    "Apellido": "Gutierrez",
    "Matricula": "2468897"
      },
      {
    "Nombre": "Omar",
    "Apellido": "Garza",
    "Matricula": "1975842"
      }
  ];

}