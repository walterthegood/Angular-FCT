import {Component, output, signal } from '@angular/core';
import { Character } from '../../../Interface/character.inferface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  
  name = signal('');
  powerLevel = signal(0);

  newCharacter = output<Character>();


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9000 },
    { id: 2, name: 'Vegeta', powerLevel: 8500 },
  ]);

  addCharacter() {

    if (!this.name() || !this.powerLevel() || this.powerLevel() <= 0) {
      alert('Pon un nombre y un nivel de poder válido');
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      powerLevel: this.powerLevel(),
    };
    
    //this.characters.update((list) => [...list, newCharacter]);    

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.powerLevel.set(0);
  }


 }
