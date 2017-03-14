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


@NgModule({
  declarations: [ContactsAppComponent, ContacsListComponent, ContacsDetailComponent, ContacsEditorComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService, {provide: 'ApiUrl', useValue: 'http://localhost:4201/api'}
  ]
})
export class ContactsModule {

}
