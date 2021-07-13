import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';

describe('CharacterListService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
