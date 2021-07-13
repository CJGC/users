import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/DTO/user';
import { UserService } from 'src/app/services/user.service';
import { DialogService } from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [DialogService, MessageService]
})
export class UsersComponent implements OnInit {

  public users : Array<UserDto>;

  constructor(
    private userService : UserService,
    private dialogService : DialogService,
    private messageService : MessageService
    ) { 
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

  public createUser() : void {
    const ref = this.dialogService.open(CreateUserComponent, {
      header: 'Create user',
      width: '70%'
    });

    ref.onClose.subscribe((user : UserDto) => {
      if (user) {
        this.users.push(user);
        this.messageService.add({severity:'success', summary:'Success', detail:'The user was created successfully!'});
      }
    });
  }
}
