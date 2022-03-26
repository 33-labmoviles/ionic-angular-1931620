import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos = [
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "ABC123",
      "imagen": "assets/hola/hola.png"
    }
  ];

}