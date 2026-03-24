import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero-page.html',
    imports: [ UpperCasePipe],


})
export class HeroPage {

    name = signal('Ironman');
    age = signal(45);

    heroDescription = computed(() => { 

        const desciption = `${this.name()} tiene ${this.age()} años.`;
        return desciption;

    })

    capitalizedName = computed(() => this.name().toUpperCase());

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
