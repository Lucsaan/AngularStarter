import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import { ContactsService} from '../contacts.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'trm-contacs-list',
  templateUrl: './contacs-list.component.html',
  styleUrls: ['./contacs-list.component.css']
})
export class ContacsListComponent implements OnInit {

 contacts: Observable<Array<Contact>>;
 
 private terms$ = new Subject<string>();
 //private terms$ = new Observable<string>();
  
  title = 'Angular 2 Master Class setup works!';
  
  constructor( private contactsService: ContactsService){
    
      
  }

  ngOnInit(){
   
   this.contacts = this.terms$.debounceTime(400).distinctUntilChanged()
               .switchMap(term => this.contactsService.search(term))
               .merge(this.contactsService.getContacts().takeUntil(this.terms$)
               );
   


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
