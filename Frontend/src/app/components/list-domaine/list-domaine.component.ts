import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DomaineService } from 'src/app/service/domaine.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-list-domaine',
  templateUrl: './list-domaine.component.html',
  styleUrls: ['./list-domaine.component.css']
})
export class ListDomaineComponent implements OnInit {

  domaines: any;
  editDomaineForm: FormGroup;
  addDomaineForm: FormGroup;
  term: any;

  constructor(private domaineService: DomaineService,private modalService: NgbModal,  private tokenStorageService: TokenStorageService, private fb: FormBuilder ,private toastr: ToastrService) {
    this.editDomaineForm = this.fb.group({
      libelle: new FormControl('', [
        Validators.required
      ]),})
      this.addDomaineForm = this.fb.group({
        libelle: new FormControl('', [
          Validators.required
        ]),})
   }

  get libelle() {
    return this.editDomaineForm.get('libelle');
  }
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    this.domaines = this.domaineService.getDomaines().subscribe(data =>{this.domaines = data
      console.log(data)
    } );
    
  }
  openModalEditDomaine(targetModal: any, domaineEdit: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editDomaineForm.patchValue({
      libelle: domaineEdit.libelle,

    });
  }

  editDomaine(idDomaine: any) {
    const data = this.editDomaineForm.value;
    this.domaineService.editDomaine(data, idDomaine).subscribe(
      res => {
        this.toastr.success('Domaine modifié avec succès');
        this.modalService.dismissAll();
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    );
    
  }
  openModalAddDomaine(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
   
  }
  addDomaine() {
    const data = this.addDomaineForm.value;
    this.domaineService.addDomaine(data).subscribe(
      res => {
        this.toastr.success('Domaine ajouté avec succès');
        this.modalService.dismissAll();
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    );
    
  }


  supprimer(idDomaine: any) {

    let res = confirm('Êtes-vous sûr de vouloir supprimer ce domaine?');
    if (res) {
      this.domaineService.deleteDomaine(idDomaine).subscribe((data: any) => {
        this.toastr.success('Domaine supprimé avec succès');
        window.location.reload();
      },
        err => {
          console.log(err);
        });
    }
   }

}
