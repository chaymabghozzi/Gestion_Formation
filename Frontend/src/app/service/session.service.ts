import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { }

  addSession(session: any, id_formateur: number | null){
    return this.http.post("http://localhost:8090/addSession/"+ id_formateur, session);
  }
  getSessions(id: any | null){
    return this.http.get("http://localhost:8090/formateur/"+id+"/sessions")
  }

  deleteSession(id_formateur:any, id_session:any){
    return this.http.delete("http://localhost:8090/deleteSession/formateur/"+id_formateur +"/sessions/"+id_session)  
  }
  
  editSession( id_formateur: number, id_session: number , session: any) {
    return this.http.put('http://localhost:8090/editSession/formateur/' + id_formateur + '/sessions/' + id_session, session);
  }

}
