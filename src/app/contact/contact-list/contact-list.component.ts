import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContact: string;

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
    this.selectedContact = '';
  }

  /*onContactSelected(contact: Contact): void {
    console.log(contact);
    this.selectedContact = contact.firstName + ' ' + contact.lastName;
  }*/

  ngOnInit() {
    /*this.contacts = this.contactService.get();
    console.log(this.contacts);*/
    this.contactService.get().subscribe((response => {
      this.contacts = response;
      console.log(response);
    }));
  }

  onContactSelect(contact) {
    this.router.navigate(['/contacts/' + contact.id]);
  }
}
