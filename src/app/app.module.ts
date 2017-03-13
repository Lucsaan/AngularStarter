import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { ContacsListComponent } from './contacs-list/contacs-list.component';
import { RouterModule} from '@angular/router';
import { APP_ROUTES} from './app.routes';
import { ContacsDetailComponent } from './contacs-detail/contacs-detail.component';


@NgModule({
  declarations: [ContactsAppComponent, ContacsListComponent, ContacsDetailComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService]
})
export class ContactsModule {

}
