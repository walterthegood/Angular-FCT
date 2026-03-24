import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id : number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {


  name = signal('');
  powerLevel = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9000 },/*
    { id: 2, name: 'Vegeta', powerLevel: 8500 },
    { id: 3, name: 'Gohan', powerLevel: 7000 },
    { id: 4, name: 'Yamcha', powerLevel: 500 },
    { id: 5, name: 'Krillin', powerLevel: 3000 },*/
  ]);

  addCharacter() {

    if (!this.name() || !this.powerLevel() || this.powerLevel() <= 0) {
      alert('Pon un nombre y un nivel de poder válido');
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      powerLevel: this.powerLevel(),
    };
    
    this.characters.update((list) => [...list, newCharacter]);    
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.powerLevel.set(0);
  }


}
