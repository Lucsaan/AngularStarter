import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA} from './data/contact-data';
import { ContactsService} from './contacts.service';


@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
  
})
export class ContactsAppComponent {
  
  contacts: Contact[];
  
  title = 'Angular 2 Master Class setup works!';
  
  constructor( private contactsService: ContactsService){}

  ngOnInit(){
    this.contacts = this.contactsService.getContacts();
  }
  
trackByContactId(index, contact){
  return contact.id;
}
  
}
