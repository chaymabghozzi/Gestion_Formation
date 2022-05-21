import { SessionService } from './../../service/session.service';
import { FormateurService } from './../../service/formateur.service';
import { Profil } from './../../models/profil';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfilService } from './../../service/profil.service';
import { PaysService } from './../../service/pays.service';
import { ParticipantService } from './../../service/participant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent implements OnInit {
  participants: any;
  editParticipantForm: FormGroup;
  participantEdit: any;
  profils: any;
  selectedProfils = '';
  allPays: any;
  organismes: any;
  selectedPays = '';
  selectedType = '';
  selectedOrganismes = '';
  isLoggedIn = false;
  term: any;
  sessions: any

  constructor(private participantService: ParticipantService, private paysService: PaysService,
    private profilService: ProfilService, private router: Router, private toastr: ToastrService, private formateurService: FormateurService,
    private modalService: NgbModal, private fb: FormBuilder, private sessionService: SessionService, private tokenStorageService: TokenStorageService) {

    this.editParticipantForm = this.fb.group({
      nom: new FormControl('', [
        Validators.required
      ]),
      prenom: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      profil: new FormControl('', [
        Validators.required
      ]),
      pays: new FormControl('', [
        //Validators.required
      ]),
      type: new FormControl('', [
        Validators.required
      ]),
      organisme: new FormControl('', [
        // Validators.required
      ])
    });
  }
  get nom() {
    return this.editParticipantForm.get('nom');
  } get prenom() {
    return this.editParticipantForm.get('prenom');
  }

  get email() {
    return this.editParticipantForm.get('email');
  }

  get tel() {
    return this.editParticipantForm.get('tel');
  }
  get profil() {
    return this.editParticipantForm.get('profil');
  }

  get pays() {
    return this.editParticipantForm.get('pays');
  }
  get type() {
    return this.editParticipantForm.get('type');
  }
  get organisme() {
    return this.editParticipantForm.get('organisme');
  }
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
    this.profils = this.profilService.getAllProfil().subscribe(data => this.profils = data);
    this.allPays = this.paysService.getAllPays().subscribe(data => this.allPays = data);
    this.organismes = this.participantService.getAllOrganismes().subscribe(data => this.organismes = data);

    // //getAllParticpant
    let tab = new Array();

    this.profilService.getAllProfil().subscribe((profils: any) => {

      profils.forEach((elementProfils: any) => {

        this.participantService.getParticipantsByProfilByPays(elementProfils.id).subscribe((res: any) => {
          res.content.forEach((element: any) => {
            element.id_profil = elementProfils.id;
            element.libelle_profil = elementProfils.libelle;

            if (element.organisme != 0) {
              this.participantService.getOrganisme(element.organisme).subscribe((res: any) => {
                element.nom_organisme = res.libelle
              })
            }
            if (element.pays != 0) {
              this.paysService.getPays(element.pays).subscribe((res: any) => {
                element.nom_pays = res.nom
              })
            }
            this.participantService.getSessionsOfParticipant(element.id).subscribe((participant: any) => {
              if (participant.length != 0) {
                element.sessions = participant
              }

            },
              err => {
                console.log(err);
              })
            console.log(tab)
            tab.push(element);
          });
        });
      });
    });

    this.participants = tab
  }
  selectChangeHandlerType(event: any) {
    this.selectedType = event.target.value;
  }
  selectChangeHandlerPays(event: any) {
    this.selectedPays = event.target.value;
  }
  selectChangeHandlerProfil(event: any) {
    this.selectedProfils = event.target.value;
  }
  selectChangeHandlerOrganisme(event: any) {
    this.selectedOrganismes = event.target.value;
  }

  openModal(targetModal: any, participantEdit: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editParticipantForm.patchValue({
      nom: participantEdit.nom,
      prenom: participantEdit.prenom,
      email: participantEdit.email,
      tel: participantEdit.tel,
      type: participantEdit.type,
      pays: participantEdit.pays,
      organisme: participantEdit.organisme,
      profil: participantEdit.id_profil,
    });
  }

  onSubmit(idParticipant: any) {
    const data = this.editParticipantForm.value;
    this.participantService.editParticipant(data, data.profil, idParticipant).subscribe(
      res => {
        this.toastr.success('Particpant modifié avec succès');
        this.router.navigateByUrl('/listParticipant');
        this.modalService.dismissAll();
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    );

  }


  supprimer(idProfil: any, idParticipant: any) {

    let res = confirm('Êtes-vous sûr de vouloir supprimer ce participant?');
    if (res) {
      this.participantService.deleteParticipantsByProfilByPays(idProfil, idParticipant).subscribe((data: any) => {
        this.toastr.success('Participant supprimé avec succès');
        window.location.reload();
      },
        err => {
          console.log(err);
        });
    }
  }
}


