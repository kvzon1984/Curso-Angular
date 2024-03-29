
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfece';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListDbzComponent {

  @Output()
  public emitDeleteCharacter = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 100 }
  ]

  onDeleteChacacter( id?: string ):void {

    if(!id) return;

    this.emitDeleteCharacter.emit( id );
  }
}
