
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfece';

@Component({
  selector: 'dbz-agregar',
  templateUrl: 'agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0
  }

  emitChacacter(): void{

    console.log(this.character);
    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character.name = '';
    this.character.power = 0;

  }
 }
