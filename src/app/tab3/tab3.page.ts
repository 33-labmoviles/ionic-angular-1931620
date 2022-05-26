import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';


import { Alumno } from '../alumno';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  nombre: string ="";
  apellido: string ="";
  matricula: string ="";

  modelo = new Alumno( this.nombre, this.apellido, this.matricula);

  onSubmit(agregarAlumno: NgForm) {
    //Algo aqui
    console.log("Submit")
    //AQUI VA EL REQUEST
  }

}