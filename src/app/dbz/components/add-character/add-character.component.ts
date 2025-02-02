import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };
  
  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name !== '') {
      this.onNewCharacter.emit({...this.character, id: uuid()});
    }

    this.character.name = '';
    this.character.power = 0;
  }

}
