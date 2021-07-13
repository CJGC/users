import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../DTO/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  public getUsers() : Observable<Array<UserDto>> {
    return this.http.get<Array<UserDto>>(environment.apiURL + '/api/user');
  }

  public saveStudent(user : UserDto) : Observable<UserDto> {
    return this.http.post<UserDto>(environment.apiURL, user);
  }
}
