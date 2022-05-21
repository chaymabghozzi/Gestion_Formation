import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/service/formation.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-domaine-list',
  templateUrl: './domaine-list.component.html',
  styleUrls: ['./domaine-list.component.css']
})
export class DomaineListComponent implements OnInit {
  isLoggedIn = false;
  term: any;

  constructor(private service: FormationService, private router: Router, private tokenStorageService: TokenStorageService) { }
  domaines: any;
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

  listFormation(id_domaine: any){
    this.router.navigate(['/listFormations', id_domaine]);

  }

  supp(id: any, id_domaine: any) {
    this.service.deleteFormation(id, id_domaine).subscribe((data: any) => {
      window.location.reload();
    },
      err => {
        console.log(err);
      }
    )
  }
}
