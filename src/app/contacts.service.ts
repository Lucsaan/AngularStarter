import { Injectable } from '@angular/core';
import { CONTACT_DATA} from './data/contact-data';
import { Contact } from './models/contact';

@Injectable()
export class ContactsService {

  contacts: Array<Contact> = CONTACT_DATA;

  constructor() { }

  getContacts(){
    return this.contacts;
  }

  getContact(id){
    return this.contacts.find(contact => contact.id.toString() === id);
  }

}
