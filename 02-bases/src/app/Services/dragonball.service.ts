import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../Interface/character.inferface';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9000 },
    { id: 2, name: 'Vegeta', powerLevel: 8500 },
  ]);


  saveToLocalStorage = effect(() => {

    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }


}
