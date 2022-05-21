import { FormationService } from 'src/app/service/formation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  formations: any;
  id_domaine: any;
  domaines: any;
  sub: any;
  editFormationForm: FormGroup;
  selectedDomaine = '';
  selectedType = '';
  isLoggedIn = false;
  term: any;

  constructor(private modalService: NgbModal, private service: FormationService, private route: ActivatedRoute, private toastr: ToastrService, private fb: FormBuilder, 
    private router: Router, private tokenStorageService: TokenStorageService) {
    this.editFormationForm = this.fb.group({
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
    });
  }


  get titre() {
    return this.editFormationForm.get('titre');
  }
  get duree() {
    return this.editFormationForm.get('duree');
  }
  get annee() {
    return this.editFormationForm.get('annee');
  }
  get nb_session() {
    return this.editFormationForm.get('nb_session');
  }
  get domaine() {
    return this.editFormationForm.get('domaine');
  }
  get type() {
    return this.editFormationForm.get('type');
  }
  get budget() {
    return this.editFormationForm.get('budget');
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
    this.domaines = this.service.getDomaines().subscribe(data => this.domaines = data);

    this.id_domaine = this.route.snapshot.params['id_domaine'];

    var tab = new Array()

    this.service.getDomaine(this.id_domaine).subscribe((data: any) => {

      this.service.getFormations(data.id).subscribe((res: any) => {

        res.content.forEach((element: any) => {
          element.libelle = data.libelle;
          element.id_domaine = data.id;
          tab.push(element);
        });
      })
    })
    this.formations = tab;
  }


  listformations() {

  }

  supprimer(id: any) {
    this.id_domaine = this.route.snapshot.params['id_domaine'];
    let res = confirm('Êtes-vous sûr de vouloir supprimer cette formation?');
    if (res) {
    this.service.deleteFormation(id, this.id_domaine).subscribe((data: any) => {
      this.toastr.success('Formation supprimée avec succès');
      window.location.reload()
    },
      err => {
        console.log(err);
      }
    )
    } 

  }

   // tslint:disable-next-line:typedef
   selectChangeHandlerType(event: any) {
    this.selectedType = event.target.value;
  }
  // tslint:disable-next-line:typedef
  selectChangeHandlerDomaine(event: any) {
    this.selectedDomaine = event.target.value;
  }
  // tslint:disable-next-line:typedef
  openModal(targetModal: any, formation: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editFormationForm.patchValue({
      titre: formation.titre,
      duree: formation.duree,
      annee: formation.annee,
      nb_session: formation.nb_session,
      type: formation.type,
      budget: formation.budget,
        domaine: formation.id_domaine,

    });
    console.log(formation.type);

  }

  onSubmit(id: any) {
    const data = this.editFormationForm.value;
    console.log(data.domaine)
    this.service.editFormation(data.domaine, id, data).subscribe(
      res => {
        this.toastr.success('formation modifié avec succès');
        this.router.navigate(['/listFormations',this.selectedDomaine]);
      },
      err => {
        console.log(err);
      }
     );

    this.modalService.dismissAll();
    window.location.reload();
  }
}
