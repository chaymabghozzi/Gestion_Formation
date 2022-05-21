import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organisme } from '../models/organisme';

@Injectable({
  providedIn: 'root'
})
export class OrganismeService {
  private addOrganismeUrl = 'http://localhost:8090/api/addOrganisme';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  addOrganisme(organisme: Organisme){
    return this.http.post(this.addOrganismeUrl, organisme);
  }

  // tslint:disable-next-line:typedef
  getOrganismes(){
    return this.http.get('http://localhost:8090/api/organismes');
  }

  // tslint:disable-next-line:typedef
  getOrganisme(id: any ){
    return this.http.get('http://localhost:8090/api/organisme/' + id);
  }
  editOrganisme(organisme: Organisme, idOrganisme: any){
    return this.http.put('http://localhost:8090/api/updateOrganisme/' + idOrganisme ,organisme)
  }
  deleteOrganisme( idOrganisme: any) {
    return this.http.delete('http://localhost:8090/api/deleteOragnisme/' + idOrganisme );
  }
}



