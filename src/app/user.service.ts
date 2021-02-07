import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 user!:User;
 private username:string | undefined;
  private url = 'https://api.github.com/users/';
 private clientid = "6527906e554b491b7085a6ff16cbf3a3fafacb2e"


  constructor(private http:HttpClient) {
    this.username = "Isaac23-K";
   }
   getUser():Observable<User>{
     return this.http.get<User>(this.url + this.username + "?cliient_id" + this.clientid).pipe();
   }
   getRepos(): Observable<Repos[]>{
     return this.http.get<Repos[]>(this.url + this.username + "/repos?client_id" + this.clientid).pipe();
   }
   updateProfile(username:string){
     this.username = username;
   }
}
