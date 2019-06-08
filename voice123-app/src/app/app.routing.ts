import { Routes } from '@angular/router';
import {ActorsSummaryComponent} from './components/actors-summary/actors-summary.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ActorsSummaryComponent
    }
];