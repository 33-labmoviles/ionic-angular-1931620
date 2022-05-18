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
      "matricula": "fdgfgfd",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "ABhgfhC123",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "sadasds",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "dsadsadsad",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "ABC1dsadsa23",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "dsadsadsdsd",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "dsdsadsadsada344",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "fdsfdsf3",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "dsfdsf546",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "fdsfds3",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "dsfdsfdsf343",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "dsfdsf3434",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "fsdfdsf435",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "fdsfds4543",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "fsdf2",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "gfdg54354",
      "imagen": "assets/hola/hola.png"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "fdsfds5435",
      "imagen": "assets/hola/hola.png"
    }
  ];

}