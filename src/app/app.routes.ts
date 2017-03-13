import { ContacsListComponent } from './contacs-list/contacs-list.component';   
import { ContacsDetailComponent} from './contacs-detail/contacs-detail.component';

export const APP_ROUTES = [
    {path: '', pathMatch: 'prefix', component: ContacsListComponent},
    {path: 'contact/:id', component: ContacsDetailComponent},
    {path: '**', redirectTo:'/'}
    
    ]
    