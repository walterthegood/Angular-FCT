import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero/hero';

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
        path: '**', 
        redirectTo: ''
    }
];
