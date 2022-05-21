import { Participant } from './../models/participant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

  getParticipantsByProfilByPays(idProfil: any) {
    return this.http.get('http://localhost:8090/profil/' + idProfil + '/participants');
  }

  deleteParticipantsByProfilByPays(idProfil: any, idParticipant: any) {
    return this.http.delete('http://localhost:8090/profil/' + idProfil + '/deleteParticipant/' + idParticipant);
  }

  addParticipant(participant: Participant, idProfil: any) {
    return this.http.post('http://localhost:8090/profil/' + idProfil + '/addparticipant', participant)
  }
  getAllOrganismes() {
    return this.http.get('http://localhost:8090/api/organismes');
  }
  getOrganisme(idOrganisme: any) {
    return this.http.get('http://localhost:8090/api/organisme/' + idOrganisme);
  }

  getParticipantById(idParticipant: any){
    return this.http.get('http://localhost:8090/participant/' + idParticipant);
  }

  editParticipant(participant: Participant, idProfil: any,idParticipant: any) {
    return this.http.put('http://localhost:8090/profil/' + idProfil + '/updateParticipant/'+idParticipant,participant)
  }

  getSessionsOfParticipant(idParticipant: any){
    return this.http.get('http://localhost:8090/sessionsOfParticipant/' + idParticipant);
  }


}
