import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-characters',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'

})

export class ListDbzComponent { 

  @Input()
  public charactersList: Character[] = [];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
    console.log(id);
  }
    
}
