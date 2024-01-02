import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interfece';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 9500 },
    { name: 'Trunks', power: 15000 },
  ];

  onPushCharacter(character: Character): void {
    console.log('caracter',character);

    this.characters.push({ ...character })
  }

  onDeleteChacacter(character: Character): void {
    this.characters = this.characters.filter( x => x.name !== character.name)
  }

}
