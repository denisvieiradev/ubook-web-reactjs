import ServiceDataSource from "../ServiceDataSource";
import FakeContactsApiDataSource from "./FakeContactsApiDataSource";
import ContactsApiDataSource from "./ContactsApiDataSource";

class ContactsService extends ServiceDataSource {
  constructor() {
    super(FakeContactsApiDataSource, ContactsApiDataSource);
  }

  getContacts() {
    return this.datasource().getContacts();
  }

  createContact(contact) {
    return this.datasource().createContact(contact);
  }

  removeContact(contact) {
    return this.datasource().removeContact(contact);
  }
  
}

export default ContactsService;
