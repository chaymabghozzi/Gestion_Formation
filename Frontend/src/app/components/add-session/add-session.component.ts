import { ParticipantService } from 'src/app/service/participant.service';
import { ProfilService } from 'src/app/service/profil.service';
import { Participant } from './../../models/participant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Session } from 'src/app/models/session';
import { FormateurService } from 'src/app/service/formateur.service';
import { FormationService } from 'src/app/service/formation.service';
import { OrganismeService } from 'src/app/service/organisme.service';
import { SessionService } from 'src/app/service/session.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {
  addSessionForm: FormGroup;
  formateurs: any;
  organismes: any;
  formations: any;
  domaines: any;
  participants: any;
  profils: any;
  // tslint:disable-next-line:variable-name
  id_domaine: any;
  selectedFormation: any;
  selectedFormateur: any;
  selectedParticpant: any;

  constructor(private fb: FormBuilder, private serviceFormation: FormationService, private tokenStorageService: TokenStorageService,
    private router: Router, private toastr: ToastrService, private serviceSession: SessionService, private serviceFormateur: FormateurService,
    private organismeService: OrganismeService, private profilService: ProfilService, private participantService: ParticipantService) {
    const formControls = {
      lieu: new FormControl('', [
        Validators.required
      ]),
      nb_participant: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]),
      date_debut: new FormControl('', [
        Validators.required,
      ]),
      date_fin: new FormControl('', [
        Validators.required,
      ]),
      formateur: new FormControl('', [
        Validators.required
      ]),
      formation: new FormControl('', [
        Validators.required
      ]),
      participant: new FormControl('', [
        Validators.required
      ]),
    };
    this.addSessionForm = this.fb.group(formControls);
  }
  // tslint:disable-next-line:typedef
  get lieu() {
    return this.addSessionForm.get('lieu');
  }
  // tslint:disable-next-line:typedef
  get nb_participant() {
    return this.addSessionForm.get('nb_participant');
  }
  // tslint:disable-next-line:typedef
  get date_debut() {
    return this.addSessionForm.get('date_debut');
  }
  // tslint:disable-next-line:typedef
  get date_fin() {
    return this.addSessionForm.get('date_fin');
  }
  // tslint:disable-next-line:typedef
  get formateur() {
    return this.addSessionForm.get('formateur');
  }
  // tslint:disable-next-line:typedef
  get formation() {
    return this.addSessionForm.get('formation');
  }
  get participant() {
    return this.addSessionForm.get('participant');
  }

  isLoggedIn = false;
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    
    this.organismes = this.organismeService.getOrganismes().subscribe(data => this.organismes = data);
    // tslint:disable-next-line:prefer-const
    let tab1 = new Array();
    this.organismes = this.organismeService.getOrganismes().subscribe((data: any) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        this.organismeService.getOrganisme(data[i].id).subscribe((data: any) => {

          this.serviceFormateur.getFormateurs(data.id).subscribe((res: any) => {


            res.forEach((element: any) => {
              element.libelle = data.libelle;
              element.id_organisme = data.id;
              tab1.push(element);
            });

          });
        });
      }
      this.formateurs = tab1;
    });


    //select formation
    this.domaines = this.serviceFormation.getDomaines().subscribe(data => this.domaines = data);
    // tslint:disable-next-line:prefer-const
    let tab2 = new Array();
    this.domaines = this.serviceFormation.getDomaines().subscribe((data: any) => {

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        this.serviceFormation.getDomaine(data[i].id).subscribe((data: any) => {

          this.serviceFormation.getFormations(data.id).subscribe((res: any) => {

            res.content.forEach((element: any) => {
              element.libelle = data.libelle;
              element.id_domaine = data.id;
              tab2.push(element);
            });

          });
        });
      }
      this.formations = tab2;

    });

    //select participant
    this.profils = this.profilService.getAllProfil().subscribe(data => this.profils = data);
    // tslint:disable-next-line:prefer-const
    let part = new Array();
    this.profils = this.profilService.getAllProfil().subscribe((data: any) => {

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        this.profilService.getProfil(data[i].id).subscribe((data: any) => {

          this.participantService.getParticipantsByProfilByPays(data.id).subscribe((res: any) => {

            res.content.forEach((element: any) => {
              element.libelle = data.libelle;
              element.id_profil = data.id;
              part.push(element);
            });
          });
        });
      }
      this.participants = part;

    });

  }

  // tslint:disable-next-line:typedef
  selectChangeHandler1(event: any) {
    this.selectedFormateur = event.target.value;
  }

  // tslint:disable-next-line:typedef
  selectChangeHandler2(event: any) {
    this.selectedFormation = event.target.value;
  }
  // tslint:disable-next-line:typedef
  selectChangeParticipant(event: any) {
    this.selectedParticpant = event.target.value;
  }


  // tslint:disable-next-line:typedef
  addSession(session: any) {

    // tslint:disable-next-line:max-line-length
    const data = [{
      lieu: this.addSessionForm.value.lieu, nb_participant: this.addSessionForm.value.nb_participant, date_debut: this.addSessionForm.value.date_debut,
      date_fin: this.addSessionForm.value.date_fin, formation: this.addSessionForm.value.formation, participant: this.addSessionForm.value.participant
    }];


    if (this.addSessionForm.value.participant.length <= this.addSessionForm.value.nb_participant) {
      this.serviceSession.addSession(data[0], this.selectedFormateur).subscribe(
        res => {
          this.toastr.success('Session ajoutée avec succès');
          this.router.navigate(['/listSessions']);
        },
        err => {
          console.log(err);
        }
      );
    }
    else {
      this.toastr.warning('Vous ne pouvez pas dépasser ' + this.addSessionForm.value.nb_participant + '  participants ');
    }
  }
}
