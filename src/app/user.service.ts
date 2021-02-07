import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos'
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 user!:User;
 

  constructor() { }
}
