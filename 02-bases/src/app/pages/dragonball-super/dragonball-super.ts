import { Component, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add"; 
import { Character } from '../../Interface/character.inferface';


@Component({
  templateUrl: './dragonball-super.html',
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd ],
})
export class DragonballSuper {

  name = signal('');
  powerLevel = signal(0);

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
      id: 100,
      name: this.name(),
      powerLevel: this.powerLevel(),
    };
    
      
    //this.characters.update((list) => [...list, newCharacter]);    
    console.log(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.powerLevel.set(0);
  }


}
