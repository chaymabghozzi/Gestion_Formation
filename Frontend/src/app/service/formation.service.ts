import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../models/formation';


@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }
  getDomaines(){
    return this.http.get("http://localhost:8090/domaines")
  }

  getDomaine(id: any | null){
    return this.http.get("http://localhost:8090/domaine/"+id)
  }
  getFormations(id: any | null){
    return this.http.get("http://localhost:8090/domaines/"+id+"/formations")
  }
  deleteFormation(id: any | null,id_domaine: any | null){
    return this.http.delete("http://localhost:8090/domaines/"+id_domaine+"/formations/"+id)
  }
  addFormation(formation: Formation, id_domaine: any | null){
    return this.http.post("http://localhost:8090/domaines/"+ id_domaine+"/formations", formation);
  }

  editFormation( id_domaine: any, id: any , formation: Formation) {
    return this.http.put('http://localhost:8090/domaines/' + id_domaine + '/formations/' + id, formation);
  }
}
