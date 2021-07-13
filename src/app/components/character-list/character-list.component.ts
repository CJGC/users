import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  public charactersAmount : number;
  public charactersWebsites : any;
  public charactersInfo : any;
  public characters : Array<any>;
  public first : number;

  constructor(
    private characterService : CharacterService
    ) { 
    this.first = 0;
    this.charactersAmount = 0;
    this.charactersWebsites = {};
    this.charactersInfo = {};
    this.characters = new Array<any>();
  }

  ngOnInit(): void {
    this.getCharactersWebsites();
  }

  private getCharactersWebsites() : void {
    this.characterService.getCharactersWebsites().subscribe(
      charactersWebsites => {
        this.charactersWebsites = charactersWebsites;
        this.getCharactersInfo();
      },
      error => console.error(error)
    );
  }

  private getCharactersInfo() : void {
    this.characterService.getCharactersInfo(<string> this.charactersWebsites.characters).subscribe(
      charactersInfo => {
        this.charactersInfo = charactersInfo;
        this.saveCharacters();
      },
      error => console.error(error)
    )
  }

  private saveCharacters() : void {
    this.characters = this.charactersInfo.results;
    this.charactersAmount = this.characters.length;
  }

  public onPageChange(event : any) : void {
    this.first = event.first;
  }
}
