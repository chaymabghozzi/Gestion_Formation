import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaysService } from './../../service/pays.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-list-pays',
  templateUrl: './list-pays.component.html',
  styleUrls: ['./list-pays.component.css']
})
export class ListPaysComponent implements OnInit {
  allPays: any;
  editPaysForm: FormGroup;
  addPaysForm: FormGroup;
  term: any;
  constructor(private paysService: PaysService,private modalService: NgbModal, private tokenStorageService: TokenStorageService, private fb: FormBuilder ,private toastr: ToastrService,) {
    this.editPaysForm = this.fb.group({
      nom: new FormControl('', [
        Validators.required
      ]),})
      this.addPaysForm = this.fb.group({
        nom: new FormControl('', [
          Validators.required
        ]),})
   }

  get nom() {
    return this.editPaysForm.get('nom');
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
    this.allPays = this.paysService.getAllPays().subscribe(data => {this.allPays = data});
    
  }
  openModalEdit(targetModal: any, paysEdit: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editPaysForm.patchValue({
      nom: paysEdit.nom,

    });
  }

  editPays(idPays: any) {
    const data = this.editPaysForm.value;
    this.paysService.editPays(data, idPays).subscribe(
      res => {
        this.toastr.success('Particpant modifié avec succès');
        this.modalService.dismissAll();
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    );
    
  }
  openModalAddPays(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
   
  }
  addPays() {
    const data = this.addPaysForm.value;
    this.paysService.addPays(data).subscribe(
      res => {
        this.toastr.success('Pays ajouté avec succès');
        this.modalService.dismissAll();
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
    
  }


  supprimerPays(idPays: any) {

    let res = confirm('Êtes-vous sûr de vouloir supprimer ce pays?');
    if (res) {
      this.paysService.deletePays(idPays).subscribe((data: any) => {
        this.toastr.success('Pays supprimé avec succès');
        window.location.reload();
      },
        err => {
          console.log(err);
        });
    }
   }

}
