import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/service/formateur.service';
import { Router } from '@angular/router';
import { OrganismeService } from 'src/app/service/organisme.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Organisme } from 'src/app/models/organisme';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {
  formateurs: any;
  organismes: any;
  editFormateurForm: FormGroup;
  user: any;
  selectedOrganisme = '';
  selectedType = '';
  isLoggedIn = false;
  term: any;



  constructor(private formateurService: FormateurService, private router: Router, private organismeService: OrganismeService,
    private toastr: ToastrService, private modalService: NgbModal, private fb: FormBuilder,  private tokenStorageService: TokenStorageService) {

    this.editFormateurForm = this.fb.group({
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
      type: new FormControl('', [
        Validators.required
      ]),
      organisme: new FormControl('', [
        // Validators.required
      ])
    });
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
    this.organismes = this.organismeService.getOrganismes().subscribe(data => this.organismes = data);
    // tslint:disable-next-line:prefer-const
    let tab = new Array();
    this.organismes = this.organismeService.getOrganismes().subscribe((data: any) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        this.organismeService.getOrganisme(data[i].id).subscribe((data: any) => {

          this.formateurService.getFormateurs(data.id).subscribe((res: any) => {
            res.forEach((element: any) => {
              element.libelle = data.libelle;
              element.id_organisme = data.id;            
              tab.push(element);
              tab.forEach(function (value) {
                console.log(value.id);
              });
            });
            

          });
         
        });
      }
      this.formateurs = tab;
    });


  }

  // tslint:disable-next-line:typedef
  get nom() {
    return this.editFormateurForm.get('nom');
    // tslint:disable-next-line:typedef
  } get prenom() {
    return this.editFormateurForm.get('prenom');
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.editFormateurForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get tel() {
    return this.editFormateurForm.get('tel');
  }

  // tslint:disable-next-line:typedef
  get type() {
    return this.editFormateurForm.get('type');
  }
  // tslint:disable-next-line:typedef
  get organisme() {
    return this.editFormateurForm.get('organisme');
  }

  // tslint:disable-next-line:typedef
  selectChangeHandlerType(event: any) {
    this.selectedType = event.target.value;
  }
  // tslint:disable-next-line:typedef
  selectChangeHandlerOrganisme(event: any) {
    this.selectedOrganisme = event.target.value;
  }
  // tslint:disable-next-line:typedef
  openModal(targetModal: any, formateur: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editFormateurForm.patchValue({
      nom: formateur.nom,
      prenom: formateur.prenom,
      email: formateur.email,
      tel: formateur.tel,
      type: formateur.type,
      organisme: formateur.id_organisme
    });
    console.log(formateur.organisme)
  }
  // tslint:disable-next-line:typedef
  onSubmit(idFormateur: any) {
    const data = this.editFormateurForm.value;
    this.formateurService.editFormateur(data.organisme, idFormateur, data).subscribe(
      res => {
        this.toastr.success('Formateur modifié avec succès');
        this.router.navigateByUrl('/listFormateur');

      },
      err => {
        console.log(err);
      }
    );
    this.modalService.dismissAll();
    window.location.reload();
  }
  // tslint:disable-next-line:typedef
  supprimer(id: any, id_organisme: any) {
    // tslint:disable-next-line:prefer-const
    let res = confirm('Êtes-vous sûr de vouloir supprimer ce formateur?');
    if (res) {
      this.formateurService.deleteFormateur(id, id_organisme).subscribe((data: any) => {
        this.toastr.success('Formateur supprimé avec succès');
        window.location.reload();
      },
        err => {
          console.log(err);
        });
    }
  }

}

