import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() public character : any;
  
  constructor() { 
    this.character = {};
  }

  ngOnInit(): void {
  }

}
