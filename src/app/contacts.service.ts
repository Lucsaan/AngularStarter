import { Injectable, Inject } from '@angular/core';
import { CONTACT_DATA} from './data/contact-data';
import { Contact } from './models/contact';
import 'rxjs/add/operator/map';
import { Http, Headers} from '@angular/http';


@Injectable()
export class ContactsService {

  contacts: Array<Contact> = CONTACT_DATA;
  API_ENDPOINT = 'http://localhost:4201';

  constructor(private http: Http, @Inject('ApiUrl') private apiUrl) { }

  getContacts(){
    return this.http.get(this.apiUrl + '/contacts')
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
  }

  getContact(id){
    return this.http.get( this.apiUrl + '/contacts/' + id)
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });
  }

  updateContact(contact: Contact) {
    
    let url = this.apiUrl + '/contacts/' + contact.id;
    return this.http.put(url, contact);
  }

  search(term: string){
    return this.http.get(`${this.apiUrl}/search?text=${term}`)
    .map((res) => {return res.json()})
    .map((data) => {return data.items});
  }

  addContact(contact: Contact){
    console.log(contact);
    return this.http.post('http://localhost:4201/api/contacts', contact);
  }

}
