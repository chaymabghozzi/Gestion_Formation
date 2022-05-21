import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domaine } from '../models/domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http:HttpClient) { }
  getDomaines(){
    return this.http.get("http://localhost:8090/domaines")
  }
  addDomaine(domaine: Domaine){
    return this.http.post("http://localhost:8090/addDomaine", domaine);
  }
  editDomaine(domaine: Domaine, idDomaine: any){
    return this.http.put('http://localhost:8090/updateDomaine/' + idDomaine ,domaine)
  }
  deleteDomaine( idDomaine: any) {
    return this.http.delete('http://localhost:8090/deleteDomaine/' + idDomaine );
  }
}
