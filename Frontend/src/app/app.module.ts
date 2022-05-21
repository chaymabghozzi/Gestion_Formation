import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListParticipantComponent } from './components/list-participant/list-participant.component';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { ListFormateurComponent } from './components/list-formateur/list-formateur.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NavbarBComponent } from './components/layout/navbar-b/navbar-b.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DomaineListComponent } from './components/domaine-list/domaine-list.component';
import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { ListSessionComponent } from './components/list-session/list-session.component';
import { ListPaysComponent } from './components/list-pays/list-pays.component';
import { ListOrganismesComponent } from './components/list-organismes/list-organismes.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { ListProfilComponent } from './components/list-profil/list-profil.component';
import { ListDomaineComponent } from './components/list-domaine/list-domaine.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  
  declarations: [
    AppComponent,
    AddFormateurComponent,
    ListFormateurComponent,
    NavbarComponent,
    NavbarBComponent,

    FormationListComponent,
    AddFormationComponent,
    ListParticipantComponent,
    AddParticipantComponent,
    DomaineListComponent,
    AddSessionComponent,
    ListSessionComponent,
    ListPaysComponent,
    ListOrganismesComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    Page404Component,
    UserListComponent,
    ListProfilComponent,
    ListDomaineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ToastNoAnimationModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    Ng2SearchPipeModule

  ],
  providers: [   
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBootstrapFormValidationModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }