import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }


  //get
  

  //POST

  agregarAlumno(nuevoAlumno: any) {
    return this.http.post('https://ionic-angular-1931620-33-default-rtdb.firebaseio.com/alumnos.json', nuevoAlumno)
  }

  detalleAlumno(id: string){
    return this.http.get('https://ionic-angular-1931620-33-default-rtdb.firebaseio.com/alumnos/'+ id + '.json')
  }

}