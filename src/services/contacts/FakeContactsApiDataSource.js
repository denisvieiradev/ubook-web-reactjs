import contactsFakeResponse from "./contacts.json";
import ContactsConverter from "./ContactsConverter";

class FakeContactsApiDataSource {

  getContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const contacts = new ContactsConverter().mapperResponsesToEntities(
          contactsFakeResponse
        );

        resolve(contacts);
      }, 2000);
    });
  }

  createContact(contact) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        new ContactsConverter().mapperEntityToRequest(contact);

        resolve(contact);
      }, 2000);
    });
  }

  removeContact(contact) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        new ContactsConverter().mapperEntityToRequest(contact);

        resolve(contact);
      }, 2000);
    });
  }


}

export default FakeContactsApiDataSource;
