import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

import { ContactsService} from '../contacts.service';


@Component({
  selector: 'trm-contacs-list',
  templateUrl: './contacs-list.component.html',
  styleUrls: ['./contacs-list.component.css']
})
export class ContacsListComponent implements OnInit {

 contacts: Contact[];
  
  title = 'Angular 2 Master Class setup works!';
  
  constructor( private contactsService: ContactsService){
    
      
  }

  ngOnInit(){
    this.contactsService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
        
      });
  }
  
trackByContactId(index, contact){
  return contact.id;
}

}
