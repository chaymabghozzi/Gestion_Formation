import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProfilService } from 'src/app/service/profil.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {


  profils: any;
  editProfilForm: FormGroup;
  addProfilForm: FormGroup;
  term: any;
  constructor(private profilService: ProfilService,private modalService: NgbModal, private tokenStorageService: TokenStorageService, private fb: FormBuilder ,private toastr: ToastrService) {
    this.editProfilForm = this.fb.group({
      libelle: new FormControl('', [
        Validators.required
      ]),})
      this.addProfilForm = this.fb.group({
        libelle: new FormControl('', [
          Validators.required
        ]),})
   }

  get libelle() {
    return this.editProfilForm.get('libelle');
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
    this.profils = this.profilService.getAllProfil().subscribe(data =>{this.profils = data
    } );
    
  }
  openModalEditProfil(targetModal: any, profilEdit: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editProfilForm.patchValue({
      libelle: profilEdit.libelle,

    });
  }

  editProfil(idProfil: any) {
    const data = this.editProfilForm.value;
    this.profilService.editProfil(data, idProfil).subscribe(
      res => {
        this.toastr.success('Profil modifié avec succès');
        this.modalService.dismissAll();
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    );
    
  }
  openModalAddProfil(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
   
  }
  addProfil() {
    const data = this.addProfilForm.value;
    this.profilService.addProfil(data).subscribe(
      res => {
        this.toastr.success('Profil ajouté avec succès');
        this.modalService.dismissAll();
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    );
    
  }


  supprimer(idProfil: any) {

    let res = confirm('Êtes-vous sûr de vouloir supprimer ce profil?');
    if (res) {
      this.profilService.deleteProfil(idProfil).subscribe((data: any) => {
        this.toastr.success('Profil supprimé avec succès');
        window.location.reload();
      },
        err => {
          console.log(err);
        });
    }
   }

}
