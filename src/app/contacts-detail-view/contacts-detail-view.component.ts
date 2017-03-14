import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  private contact: Contact;


  constructor(
    private contactService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.contactService.getContact(this.route.snapshot.params['id'])
    .subscribe(contact => {
      this.contact = contact;
    })
  }

  navigateToEditor(){
    this.router.navigate(['/contact', this.contact.id, 'edit']);
  }
  navigateToList(){
    this.router.navigate(['/']);
  }

}
