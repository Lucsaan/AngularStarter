import { Injectable } from '@angular/core';
import { CONTACT_DATA} from './data/contact-data';
import { Contact } from './models/contact';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class ContactsService {

  contacts: Array<Contact> = CONTACT_DATA;
  API_ENDPOINT = 'http://localhost:4201';

  constructor(private http: Http) { }

  getContacts(){
    return this.http.get(this.API_ENDPOINT + '/api/contacts')
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
  }

  getContact(id){
    return this.http.get(this.API_ENDPOINT + '/api/contacts/' + id)
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });
  }

}
