import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http : HttpClient) { }

  public getCharactersWebsites() : Observable<object> {
    return this.http.get<object>(environment.rickApiURL + '/api');
  }

  public getCharactersInfo(url : string) : Observable<object> {
    return this.http.get<object>(url);
  }
}
