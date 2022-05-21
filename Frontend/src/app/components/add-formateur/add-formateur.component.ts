import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrganismeService } from 'src/app/service/organisme.service';
import { FormateurService } from 'src/app/service/formateur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  isLoggedIn = false;

  constructor(private fb: FormBuilder, private organismeService: OrganismeService,
    private formateurService: FormateurService, private router: Router
    // tslint:disable-next-line:align
    , private toastr: ToastrService,  private tokenStorageService: TokenStorageService) {
    // tslint:disable-next-line:prefer-const
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
      organisme: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('', [
        Validators.required
      ])
    };
    this.addFormateurForm = this.fb.group(formControls);
  }
  // tslint:disable-next-line:typedef
  get nom() {
    return this.addFormateurForm.get('nom');
  }
  // tslint:disable-next-line:typedef
  get prenom() {
    return this.addFormateurForm.get('prenom');
  }
  // tslint:disable-next-line:typedef
  get email() {
    return this.addFormateurForm.get('email');
  }
  // tslint:disable-next-line:typedef
  get tel() {
    return this.addFormateurForm.get('tel');
  }
  // tslint:disable-next-line:typedef
  get organisme() {
    return this.addFormateurForm.get('organisme');
  }
  // tslint:disable-next-line:typedef
  get type() {
    return this.addFormateurForm.get('type');
  }

  addFormateurForm: FormGroup;
  organismes: any;
  selectedOrganisme = '';
  selectedType = '';
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;

  ngOnInit(): void {
    this.organismes = this.organismeService.getOrganismes().subscribe(data => this.organismes = data);
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }

  }

  // event handler for the select element's change event
  // tslint:disable-next-line:typedef
  selectChangeHandler1(event: any) {
    // update the ui
    this.selectedType = event.target.value;
    console.log(this.selectedType);
  }
  // tslint:disable-next-line:typedef
  selectChangeHandler(event: any) {
    // update the ui
    this.selectedOrganisme = event.target.value;
    console.log(this.selectedOrganisme);
  }
  // tslint:disable-next-line:typedef
  addFormateur() {
    const data = this.addFormateurForm.value;
    this.formateurService.addFormateur(data, this.selectedOrganisme).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Formateur ajouté avec succès');
        this.router.navigateByUrl('/listFormateur');
      },
      err => {
        console.log(err);
      }
    );

  }
}
