import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import * as path from 'path';
import { ContacsEditorComponent } from './contacs-editor/contacs-editor.component';
import { ContacsListComponent } from './contacs-list/contacs-list.component';   
import { ContacsDetailComponent } from './contacs-detail/contacs-detail.component';
import { ContactsDashboardComponent } from "./contacts-dashboard/contacts-dashboard.component";

export const APP_ROUTES = 
[
    {
        path: '', 
        pathMatch: 'prefix',
        component: ContactsDashboardComponent,
        children: [
            {path: '', redirectTo: 'contact/0', pathMatch: 'full' },
            {path: 'contact/:id/edit', component: ContacsEditorComponent, canDeactivate:['ConfirmNavigationGuard']},
            {path: 'contact/:id', component: ContactsDetailViewComponent}
        ]   
    },
    {
        path: '**', redirectTo:'/'
    }
    
]
    