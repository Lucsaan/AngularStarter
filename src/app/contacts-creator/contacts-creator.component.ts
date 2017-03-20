import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
  }

  save(contact : Contact){
    this.contactsService.addContact(contact).subscribe(() => {
      console.log('Did it');
      console.log(contact);
      this.router.navigate( ['/contact', contact.id]);
    });;
  }

}
