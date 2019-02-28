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
}

export default ContactsService;
