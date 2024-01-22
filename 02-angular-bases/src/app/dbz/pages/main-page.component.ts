import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interfece';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {  }

  get characters(): Character[] {
    return [ ...this.dbzService.characters ];
  }

  onDeleteChacacter( id: string ): void {
    this.dbzService.onDeleteChacacter(id);
  }

  onPushCharacter( character: Character ): void {
    this.dbzService.onPushCharacter( character )
  }

}
