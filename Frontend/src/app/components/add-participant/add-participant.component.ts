import { ProfilService } from './../../service/profil.service';
import { PaysService } from './../../service/pays.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ParticipantService } from 'src/app/service/participant.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  addParticipantForm: FormGroup;

  constructor(private fb: FormBuilder, private tokenStorageService: TokenStorageService,
    private participantService: ParticipantService, private paysService: PaysService, private profilService: ProfilService, private router: Router, private toastr: ToastrService) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required
      ]),
      prenom: new FormControl('', [
        Validators.required
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
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
    };
    this.addParticipantForm = this.fb.group(formControls);
  }
  get nom() {
    return this.addParticipantForm.get('nom');
  }

  get prenom() {
    return this.addParticipantForm.get('prenom');
  }

  get email() {
    return this.addParticipantForm.get('email');
  }

  get tel() {
    return this.addParticipantForm.get('tel');
  }
  get profil() {
    return this.addParticipantForm.get('profil');
  }
  get pays() {
    return this.addParticipantForm.get('pays');
  }
  get type() {
    return this.addParticipantForm.get('type');
  }
  get organisme() {
    return this.addParticipantForm.get('organisme');
  }
  profils: any;
  selectedProfils = '';
  allPays: any;
  organismes: any;
  selectedPays = '';
  selectedType = '';
  selectedOrganismes ='';
  isLoggedIn = false;
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;

  ngOnInit(): void {
    this.profils = this.profilService.getAllProfil().subscribe(data => this.profils = data);
    this.allPays = this.paysService.getAllPays().subscribe(data => this.allPays = data);
    this.organismes = this.participantService.getAllOrganismes().subscribe(data => this.organismes = data);
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
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

  addParticipant() {
    const data = this.addParticipantForm.value;
    this.participantService.addParticipant(data, this.selectedProfils).subscribe(
      res => {
        this.toastr.success('Particpant ajouté avec succès');
        this.router.navigateByUrl('/listParticipant');
      },
      err => {
        console.log(err);
      }
    );
  }
}
