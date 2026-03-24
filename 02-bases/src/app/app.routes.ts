import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';    


export const routes: Routes = [

    {
        path: 'hero',
        component: HeroPage,
    },
    {
        path: 'counter',
        component: Counter,
    },
    {
        path: '',
        component: Counter,
    },
    {
        path: 'dragon-ball',
        component: Dragonball,
    },
    {
        path: 'dragon-ball-super',
        component: DragonballSuper,
    },
    {
        path: '**', 
        redirectTo: ''
    }
];
