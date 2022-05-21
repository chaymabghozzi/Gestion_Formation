import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  User: any;
  user: any;
  isLoggedIn = false;
  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private userService: UserService, private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();
    this.currentUser = this.token.getUser();
    const id = this.currentUser.id;
    this.User = this.userService.getUserbyId(id).subscribe(data => {
      this.User = data;
    });
  }

}
