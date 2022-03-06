import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  alumnos = [
    {
      "Nombre": "Abraham",
      "Apellido": "Ramirez",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Aylin",
      "Apellido": "Demecti",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Brian",
      "Apellido": "Esquivel",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Diego",
      "Apellido": "Davila",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Diego",
      "Apellido": "Jasso",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Julio",
      "Apellido": "Luevano",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Luis Armando",
      "Apellido": "Villanueva",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Luis Otoniel",
      "Apellido": "Tamez",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Rogel Axel",
      "Apellido": "Guel",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Sergio",
      "Apellido": "Gutierrez",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Omar",
      "Apellido": "Garza",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Bryan",
      "Apellido": "Castillo",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Ricardo",
      "Apellido": "Rocha",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Emiliano",
      "Apellido": "Rodriguez",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Luis Enrique",
      "Apellido": "Martinez Galvan",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Enrique",
      "Apellido": "Santillan",
      "Matricula": "ABC123"
    },
    {
      "Nombre": "Juan Antonio",
      "Apellido": "Torres Lozano",
      "Matricula": "ABC123"
    }
  ];
@Input() nombre: string="";
@Input() apellido: string = "";
@Input() matricula: string = "";

newAlumno(): void{
  var nuevoAlumno: any= {
    "Nombre": this.nombre,
    "Apellido": this.apellido,
    "Matricula" : this.matricula
  }

  this.alumnos.push(nuevoAlumno);

  console.log(this.alumnos);
}

}