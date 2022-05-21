import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateur } from '../models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {


  constructor(private http: HttpClient) { }

  addFormateur(formateur: Formateur,  idFormateur:  any ){
    return this.http.post('http://localhost:8090/api/addFormateur/' + idFormateur, formateur);
  }
  getFormateurs(id: any){
    return this.http.get('http://localhost:8090/api/formateurs/' + id);
  }

  deleteFormateur(id: any | null, id_organisme: any | null){
    return this.http.delete('http://localhost:8090/api/formateurs/' + id + '/' + id_organisme);
  }

  editFormateur( idOrganisme: any, idFormateur: any , formateur: Formateur) {
    return this.http.put('http://localhost:8090/api/formateur/' + idFormateur + '/' + idOrganisme, formateur);
  }
  getFormateur(id: any) {
    return this.http.get('http://localhost:8090/api/formateur/' + id);
  }
  getAllFormateurs() {
    return this.http.get('http://localhost:8090/api/formateurs');
  }

}
