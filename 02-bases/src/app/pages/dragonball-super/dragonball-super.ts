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

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }


}
