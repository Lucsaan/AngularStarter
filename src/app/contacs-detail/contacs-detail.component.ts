import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacs-detail',
  templateUrl: './contacs-detail.component.html',
  styleUrls: ['./contacs-detail.component.css']
})
export class ContacsDetailComponent implements OnInit {
  
  contact: any
  
  constructor(private route: ActivatedRoute, private contactsService:ContactsService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
     this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        console.log(contact);
      });
  }

}
