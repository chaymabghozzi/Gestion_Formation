
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { ListParticipantComponent } from './components/list-participant/list-participant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { ListFormateurComponent } from './components/list-formateur/list-formateur.component';

import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { DomaineListComponent } from './components/domaine-list/domaine-list.component';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { ListSessionComponent } from './components/list-session/list-session.component';

import { ListProfilComponent } from './components/list-profil/list-profil.component';
import { ListPaysComponent } from './components/list-pays/list-pays.component';
import { ListOrganismesComponent } from './components/list-organismes/list-organismes.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import { UserListComponent } from './components/user-list/user-list.component';

import { ListDomaineComponent } from './components/list-domaine/list-domaine.component';




const routes: Routes = [
  { path: 'addFormateur', component: AddFormateurComponent },
  { path: 'listFormateur', component: ListFormateurComponent },
  
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'listFormations/:id_domaine', component : FormationListComponent},
  {path: 'domaines', component : DomaineListComponent},
  { path: 'addFormation', component: AddFormationComponent },
  { path: 'listParticipant', component: ListParticipantComponent },
  { path: 'addParticipant', component: AddParticipantComponent },
  { path: 'addSession', component: AddSessionComponent },
  { path: 'listSessions', component: ListSessionComponent },
  { path: 'listPays', component: ListPaysComponent },
  { path: 'listOrganismes', component: ListOrganismesComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'Page404', component: Page404Component},

  {path: 'listUsers', component: UserListComponent},

  {path: 'listProfils', component: ListProfilComponent},
  {path: 'listDomaines', component: ListDomaineComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }