import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetC: ActionSheetController) { }
  

  ngOnInit() {
    this.obtenerDetalleAlumno(this.matricula);
  }

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

  alumnoDetalle: any = {}
  matricula: string = this.ruta.snapshot.params.id;
  
  obtenerDetalleAlumno(matricula: string): any {
    console.log(matricula);
    

    //AQUI BUSCA EN EL ARREGLO EL ALUMNO CON LA MATRICULA
    for(let i = 0; i < this.alumnos.length; i++){
      if(matricula == this.alumnos[i].matricula){
        this.alumnoDetalle = this.alumnos[i];
      }
    }

    return this.alumnoDetalle;
  }


  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones',
      cssClass: 'mi-primer-action-sheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}