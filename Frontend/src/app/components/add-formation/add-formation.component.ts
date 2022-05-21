import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/service/formation.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  isLoggedIn = false;
  constructor( private fb: FormBuilder, private service: FormationService,
     private router: Router, private toastr: ToastrService,  private tokenStorageService: TokenStorageService) {
    let formControls = {
      titre: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('', [
        Validators.required
      ]),
      annee: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]),
      nb_session: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]),
      duree: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]),
      domaine: new FormControl('', [
        Validators.required
      ])
      ,
      budget: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+')
      ])
    }
    this.addFormationForm = this.fb.group(formControls);
  }
  get titre() {
    return this.addFormationForm.get('titre');
  }
  get duree() {
    return this.addFormationForm.get('duree');
  }
  get annee() {
    return this.addFormationForm.get('annee');
  }
  get nb_session() {
    return this.addFormationForm.get('nb_session');
  }
  get domaine() {
    return this.addFormationForm.get('domaine');
  }
  get type() {
    return this.addFormationForm.get('type');
  }
  get budget() {
    return this.addFormationForm.get('budget');
  }
  addFormationForm: FormGroup;
  domaines: any;
  selectedDomaine = '';
  selectedType = '';
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  ngOnInit(): void {
    this.domaines = this.service.getDomaines().subscribe(data => this.domaines = data);
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
  }

  selectChangeHandler1(event: any) {
    this.selectedType = event.target.value;
    console.log(this.selectedType);
  }

  selectChangeHandler(event: any) {
    this.selectedDomaine = event.target.value;
    console.log(this.selectedDomaine);
  }

  addFormation() {
    const data = this.addFormationForm.value;
    this.service.addFormation(data, this.selectedDomaine).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Formation ajoutée avec succès');
        this.router.navigate(['/listFormations', this.selectedDomaine]);
      },
      err => {
        console.log(err);
      }
    );

  }

}
