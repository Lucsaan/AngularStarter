import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import { ContactsService} from '../contacts.service';


@Component({
  selector: 'trm-contacs-list',
  templateUrl: './contacs-list.component.html',
  styleUrls: ['./contacs-list.component.css']
})
export class ContacsListComponent implements OnInit {

 contacts: Observable<Array<Contact>>;
 searchTerm: any;
  
  title = 'Angular 2 Master Class setup works!';
  
  constructor( private contactsService: ContactsService){
    
      
  }

  ngOnInit(){
   this.contacts = this.contactsService.getContacts();
   
   // wird genutzt, wenn im HTML nicht die Pipe async verwendet wird.
   // Wenn man dennoch subscribed FEHLER!!!!!!

   /* this.contactsService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
        
      });*/
  }
  
trackByContactId(index, contact){
  return contact.id;
}

search(term){
  this.contacts = this.contactsService.search(term);
  
}

}
