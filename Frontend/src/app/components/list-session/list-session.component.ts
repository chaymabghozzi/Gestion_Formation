import { ParticipantService } from 'src/app/service/participant.service';
import { ProfilService } from 'src/app/service/profil.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/service/formateur.service';
import { FormationService } from 'src/app/service/formation.service';
import { SessionService } from 'src/app/service/session.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit {
  isLoggedIn = false;
  term: any;

  constructor(private serviceFormation: FormationService, private modalService: NgbModal, private tokenStorageService: TokenStorageService,
    private fb: FormBuilder, private formateurService: FormateurService,
    private sessionService: SessionService, private toastr: ToastrService, private profilService: ProfilService, private participantService: ParticipantService) {
    let formControls = {
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
      ])
    }
    this.editSessionForm = this.fb.group(formControls);

  }
  get lieu() {
    return this.editSessionForm.get('lieu');
  }
  get nb_participant() {
    return this.editSessionForm.get('nb_participant');
  }
  get date_debut() {
    return this.editSessionForm.get('date_debut');
  }
  get date_fin() {
    return this.editSessionForm.get('date_fin');
  }
  get formateur() {
    return this.editSessionForm.get('formateur');
  }
  get formation() {
    return this.editSessionForm.get('formation');
  }
  get participant() {
    return this.editSessionForm.get('participant');
  }

  sessions: any;
  formateurs: any;
  formations: any;
  sess: any;
  participants: any;
  profils: any;
  editSessionForm: FormGroup;
  selectedFormateur: any;
  selectedFormations = '';
  selectedParticpant: any;
  domaines: any;
  id_domaine: any;
  ids: any;
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
    this.formateurs = this.formateurService.getAllFormateurs().subscribe(data => this.formateurs = data);
    // tslint:disable-next-line:prefer-const
    let tab = new Array();

    this.formateurs = this.formateurService.getAllFormateurs().subscribe((data: any) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        this.formateurService.getFormateur(data[i].id).subscribe((data: any) => {

          this.sessionService.getSessions(data.id).subscribe((res: any) => {

            res.forEach((element: any) => {
              element.prenom = data.prenom;
              element.id_formateur = data.id;
              tab.push(element);
            });
          });
        });
        console.log(tab)
      }
      this.sessions = tab;
    });

    this.domaines = this.serviceFormation.getDomaines().subscribe(data => this.domaines = data);
    // tslint:disable-next-line:prefer-const
    let tab2 = new Array();

    //listFormation
    this.domaines = this.serviceFormation.getDomaines().subscribe((data: any) => {

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        this.serviceFormation.getDomaine(data[i].id).subscribe((data: any) => {

          this.serviceFormation.getFormations(data.id).subscribe((res: any) => {

            res.content.forEach((element: any) => {
              element.libelle = data.libelle;
              element.id_domaine = data.id;
              element.id_formation = element.id;
              element.id_participant
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


  supprimer(id_formateur: any, id_session: any) {
    let res = confirm('Êtes-vous sûr de vouloir supprimer cette session de formation?');
    if (res) {
      this.sessionService.deleteSession(id_formateur, id_session).subscribe((data: any) => {
        this.toastr.success('Session de formation est supprimée avec succès');
        window.location.reload()
      },
        err => {
          console.log(err);
        }
      )
    }
  }

  selectChangeHandlerFormateur(event: any) {
    this.selectedFormateur = event.target.value;
  }
  selectChangeHandlerFormations(event: any) {
    this.selectedFormations = event.target.value;
  }
  // tslint:disable-next-line:typedef
  selectChangeParticipant(event: any) {
    this.selectedParticpant = event.target.value;

  }

  openModal(targetModal: any, session: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    let formationsId = new Array();
    session.formations.forEach((element: any) => {
      element.id_formation = element.id
      formationsId.push(element.id_formation);
    })
    let participantsId = new Array();
    session.participants.forEach((element: any) => {
      element.id_participant = element.id
      participantsId.push(element.id_participant);
    })
    this.editSessionForm.patchValue({
      lieu: session.lieu,
      nb_participant: session.nb_participant,
      date_debut: session.date_debut,
      date_fin: session.date_fin,
      formateur: session.id_formateur,
      formation: formationsId,
      participant: participantsId,

    });
  }

  onSubmit(id: any) {
    const data = [{
      lieu: this.editSessionForm.value.lieu, nb_participant: this.editSessionForm.value.nb_participant,
      date_debut: this.editSessionForm.value.date_debut, date_fin: this.editSessionForm.value.date_fin,
      formation: this.editSessionForm.value.formation, participant: this.editSessionForm.value.participant
    }];
    if (this.editSessionForm.value.participant.length <= this.editSessionForm.value.nb_participant) {
      this.sessionService.editSession(this.editSessionForm.value.formateur, id, data[0]).subscribe(
        res => {
          this.toastr.success('session modifié avec succès');
          this.modalService.dismissAll();
          window.location.reload();
          console.log(res)
        },
        err => {
          console.log(err);
        }
      );
    }
    else{
      this.toastr.warning('Vous ne pouvez pas dépasser '+this.editSessionForm.value.nb_participant+ 'participants ');
    }
  }

}
