import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContactsAppComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { ContacsListComponent } from './contacs-list/contacs-list.component';
import { RouterModule} from '@angular/router';
import { APP_ROUTES} from './app.routes';
import { ContacsDetailComponent } from './contacs-detail/contacs-detail.component';
import { ContacsEditorComponent } from './contacs-editor/contacs-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { ContactResolver } from './contactResolver';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';

@NgModule({
  declarations: [ContactsAppComponent, ContacsListComponent, ContacsDetailComponent, ContacsEditorComponent, ContactsDetailViewComponent, TabComponent, TabsComponent,  ContactsDashboardComponent, ContactsCreatorComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService,
    ContactResolver,
    {provide: 'ApiUrl', useValue: 'http://localhost:4201/api'},
    {provide: 'ConfirmNavigationGuard',useValue: doConfirm}
  ]
})
export class ContactsModule {
  
}

export function doConfirm(component){
   return  !component.warnOnClosing ||window.confirm('Navigate away without saving?');
}
