import ApiDataSource from "../ApiDataSource";
import ContactsConverter from "./ContactsConverter";
import firebase from "firebase/app";
import "firebase/database";

class ContactsApiDataSource extends ApiDataSource {

  getContacts() {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref("/contacts")
        .once("value")
        .then(snapshot => {
          let contacts = [];
          if (snapshot.val()) {
            const contactsResponse = Object.values(snapshot.val());
            contacts = new ContactsConverter().mapperResponsesToEntities(
              contactsResponse
            );
          }
          resolve(contacts);
        });
    });
  }

  async saveContact(contact) {
    const newPostKey = contact.id ? contact.id : await firebase
      .database()
      .ref()
      .child("contacts")
      .push().key;

    const newContact = new ContactsConverter().mapperEntityToRequest(
      contact,
      newPostKey
    );

    const contactUpdatedWithId = { ...contact, id: newPostKey}
      
    var updates = {};

    updates["/contacts/" + newPostKey] = newContact;

    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref()
        .update(updates)
        .then(() => {
          resolve(contactUpdatedWithId);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  removeContact(contact) {
    return new Promise((resolve, reject) => {
      const contactKey = contact.id;

      var removeContactAction = {};
      removeContactAction["contacts/" + contactKey] = null;

      firebase
        .database()
        .ref()
        .update(removeContactAction)
        .then(() => {
          resolve(contact);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default ContactsApiDataSource;
