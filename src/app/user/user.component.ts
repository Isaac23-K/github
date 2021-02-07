import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Repos } from '../repos';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!:User;
  repos!:Repos[];
  username!:string;

  constructor(private userservice:UserService ) {
}
  
  ngOnInit(): void {
  }

}
