import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganismeService } from './../../service/organisme.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-list-organismes',
  templateUrl: './list-organismes.component.html',
  styleUrls: ['./list-organismes.component.css']
})
export class ListOrganismesComponent implements OnInit {
  organismes: any;
  editOrganismeForm: FormGroup;
  addOrganismeForm: FormGroup;
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  term: any;
  constructor(private organismeService: OrganismeService,private tokenStorageService: TokenStorageService, private modalService: NgbModal, private fb: FormBuilder ,private toastr: ToastrService) {
    this.editOrganismeForm = this.fb.group({
      libelle: new FormControl('', [
        Validators.required
      ]),})
      this.addOrganismeForm = this.fb.group({
        libelle: new FormControl('', [
          Validators.required
        ]),})
   }

  get libelle() {
    return this.editOrganismeForm.get('libelle');
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    this.organismes = this.organismeService.getOrganismes().subscribe(data =>{this.organismes = data
      console.log(data)
    } );
    
  }
  openModal(targetModal: any, organismeEdit: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editOrganismeForm.patchValue({
      libelle: organismeEdit.libelle,

    });
  }

  editOrganisme(idOrganisme: any) {
    const data = this.editOrganismeForm.value;
    this.organismeService.editOrganisme(data, idOrganisme).subscribe(
      res => {
        this.toastr.success('Organisme modifié avec succès');
        this.modalService.dismissAll();
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    );
    
  }
  openModalAddOrganisme(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
   
  }
  addOrganisme() {
    const data = this.addOrganismeForm.value;
    this.organismeService.addOrganisme(data).subscribe(
      res => {
        this.toastr.success('Organisme ajouté avec succès');
        this.modalService.dismissAll();
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    );
    
  }


  supprimer(idOrganisme: any) {

    let res = confirm('Êtes-vous sûr de vouloir supprimer cet organisme?');
    if (res) {
      this.organismeService.deleteOrganisme(idOrganisme).subscribe((data: any) => {
        this.toastr.success('Organisme supprimé avec succès');
        window.location.reload();
      },
        err => {
          console.log(err);
        });
    }
   }

}
