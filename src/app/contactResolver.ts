import { ContactsService } from './contacts.service';
import { Contact } from './models/contact';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class ContactResolver implements Resolve<Contact> {

  constructor(private contactsService: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot) {
      
      console.log(this.contactsService
               .getContact(route.params['id']).subscribe(data => {
                   console.log(data);
               }));
    return this.contactsService
               .getContact(route.params['id']);
  }
}