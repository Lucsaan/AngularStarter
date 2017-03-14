import { Contact } from '../models/contact';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacs-detail',
  templateUrl: './contacs-detail.component.html',
  styleUrls: ['./contacs-detail.component.css']
})
export class ContacsDetailComponent  {
  
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<void>();
  


}
