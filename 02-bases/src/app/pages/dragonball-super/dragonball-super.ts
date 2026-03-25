import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../Services/dragonball.service';


@Component({
  templateUrl: './dragonball-super.html',
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd ],
})
export class DragonballSuper {

  public dragonballService =  inject(DragonballService);

}
