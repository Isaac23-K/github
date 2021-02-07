import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Repos } from '../repos';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

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
  
getProfile(){
  this.userservice.updateProfile(this.username)
  this.userservice.getUser().subscribe((user: User) => {
    this.user = user;
  })
  this.userservice.getRepos().subscribe((repos: Repos[])=>{

   this.repos = repos;
  
 })
}


  ngOnInit(): void {
  }

}
