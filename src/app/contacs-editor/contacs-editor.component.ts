import { ContactsService } from '../contacts.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { Contact} from '../models/contact';



@Component({
  selector: 'trm-contacs-editor',
  templateUrl: './contacs-editor.component.html',
  styleUrls: ['./contacs-editor.component.css']
})

export class ContacsEditorComponent implements OnInit {

  contact: Contact = <Contact>{address:{}};
  warnOnClosing = true;
  data: any;

  constructor(private route: ActivatedRoute, private contactsService : ContactsService, private router: Router) { }

  ngOnInit() {
    /*
          this.route.data
        .map(data => data['contact'])
        .subscribe(contact => this.contact = contact);

        console.log(this.contact);*/
         
    let id = this.route.snapshot.params['id'];
     this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        
      });
  }

  save(contact : Contact){
    this.warnOnClosing = false;
    this.contactsService.updateContact(contact)
    .subscribe(() => {
      this.router.navigate( ['/contact', contact.id]);
    });
  }
  cancel(contact : Contact){

    this.router.navigate(['/contact', contact.id]);
  }

}
