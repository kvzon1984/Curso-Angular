import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfece';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 9500 },
    { id: uuid(), name: 'Trunks', power: 15000 },
  ];

  onPushCharacter( character: Character ): void {
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }

    this.characters.push({ ...newCharacter })
  }

  onDeleteChacacter( id: string ): void {
    this.characters = this.characters.filter( x => x.id !== id )
  }

}
