import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserDto } from 'src/app/DTO/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [DynamicDialogModule]
})
export class CreateUserComponent implements OnInit {

  public userForm : FormGroup;

  constructor(
    private ref : DynamicDialogRef,
    private formBuilder : FormBuilder,
    private userService : UserService
  ) { 
    this.userForm = this.formBuilder.group({
      doc : [],
      name : [],
      lastname : [],
      profile : []
    });
  }

  ngOnInit(): void {
  }

  private getUserData() : UserDto {
    let userData : UserDto = new UserDto;
    userData.doc = this.userForm.value.doc;
    userData.name = this.userForm.value.name;
    userData.lastname = this.userForm.value.lastname;
    userData.profile = this.userForm.value.profile;
    return userData;
  }

  public saveUser() : void {
    this.userService.saveStudent(this.getUserData()).subscribe(
      newUser => this.ref.close(newUser),
      error => console.error(error)
    );
  }

  public cancel() : void {
    this.ref.close();
  }
}
