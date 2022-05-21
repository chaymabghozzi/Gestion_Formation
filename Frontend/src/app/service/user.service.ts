import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8090/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
   // tslint:disable-next-line:typedef
   getUserbyId(id: number | null){
    return this.http.get('http://localhost:8090/api/auth/user/' + id);
  }
    // tslint:disable-next-line:typedef
    getUsers(){
      return this.http.get('http://localhost:8090/api/auth/users');
    }
     // tslint:disable-next-line:typedef
  updateUser(id: any, user: any) {
    return this.http.put('http://localhost:8090/api/auth/updateuser/' + id, user);
    }
     // tslint:disable-next-line:typedef
  deleteUser(id: any) {
    return this.http.delete('http://localhost:8090/api/auth/deleteuser/' + id);
  }
}
