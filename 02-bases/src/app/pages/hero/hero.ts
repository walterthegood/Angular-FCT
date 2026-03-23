import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero-page.html',
    imports: [],


})
export class HeroPage {

    name = signal('Ironman');
    age = signal(45);

    getHeroDescription() {
        return `${this.name()} tiene ${this.age()} años.`;
    }

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        this.age.set(60);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
}
