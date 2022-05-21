import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  term: any;
  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private tokenStorageService: TokenStorageService, private modalService: NgbModal, private fb: FormBuilder ,private toastr: ToastrService) {
    this.editUserForm = this.fb.group({
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
      password: new FormControl('', [
        Validators.required,
      ]),


    });
   }
    // tslint:disable-next-line:typedef
    get nom() {
      return this.editUserForm.get('nom');
    }
    // tslint:disable-next-line:typedef
    get prenom() {
      return this.editUserForm.get('prenom');
    }


    // tslint:disable-next-line:typedef
    get email() {
      return this.editUserForm.get('email');
    }
     // tslint:disable-next-line:typedef
     get password() {
      return this.editUserForm.get('password');
    }
  content = '';
  editUserForm: FormGroup;
  users: any;
  user: any;
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  iseditFailed = false;
    // tslint:disable-next-line:typedef
    openModal(targetModal: any, user: any) {
      this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
      });
      this.editUserForm.patchValue({
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        password: user.password
      });

    }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    this.users = this.userService.getUsers().subscribe(data => this.users = data);
    console.log(this.users);


  }
  // tslint:disable-next-line:typedef
 onSubmit(id: any) {
  const data = this.editUserForm.value;
  console.log(data);
  console.log(id);
  this.userService.updateUser(id, data).subscribe(
    res => {

       console.log(res);
       },
        err => {
          console.log(err);

       }
      );

  this.modalService.dismissAll();
  window.location.reload();

 }
   // tslint:disable-next-line:typedef
   supprimer(id: any) {
    const res = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?');
    if (res) {
    this.userService.deleteUser(id).subscribe((data: any) => {
      console.log(res);
      window.location.reload();
    },
      err => {
        console.log(err);
      }
    );
    }
}

}
