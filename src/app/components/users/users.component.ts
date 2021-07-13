import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/DTO/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users : Array<UserDto>;

  constructor(private userService : UserService) { 
    this.users = new Array<UserDto>();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers () : void {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => console.error(error)
    );
  }

  private createUser() : void {
    
  }
}
