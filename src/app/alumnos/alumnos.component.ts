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
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "ABhgfhC123",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "sadasds",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "dsadsadsad",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "ABC1dsadsa23",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "dsadsadsdsd",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "dsdsadsadsada344",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "fdsfdsf3",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "dsfdsf546",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "fdsfds3",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "dsfdsfdsf343",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "dsfdsf3434",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "fsdfdsf435",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "fdsfds4543",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "fsdf2",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "gfdg54354",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "fdsfds5435",
      "imagen": "assets/imagenes/logo-fcfm.jpeg"
    }
  ];

}