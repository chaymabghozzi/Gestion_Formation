import { Pays } from './../models/pays';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http: HttpClient) { }

  getAllPays(){
    return this.http.get('http://localhost:8090/pays');
  }

  getPays(idPays:any){
    return this.http.get('http://localhost:8090/pays/'+idPays);
  }
  editPays(pays: Pays, idPays: any){
    return this.http.put('http://localhost:8090/updatePays/' + idPays ,pays)
  }
  deletePays( idPays: any) {
    return this.http.delete('http://localhost:8090/deletePays/' + idPays );
  }
  addPays(pays: Pays){
    return this.http.post('http://localhost:8090/addPays',pays)
  }
 
 
}
