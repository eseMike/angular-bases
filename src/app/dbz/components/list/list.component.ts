import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    //Todo emitir el ID del personaje
    this.onDelete.emit(id);
  }
}
