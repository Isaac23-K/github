import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos'
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 user!:User;
 

  constructor(private http:HttpClient) { }
}
