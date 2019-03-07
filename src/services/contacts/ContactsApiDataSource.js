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

  async createContact(contact) {
    const newPostKey = await firebase
      .database()
      .ref()
      .child("contacts")
      .push().key;
    const newDog = new ContactsConverter().mapperEntityToRequest(
      contact,
      newPostKey
    );
    var updates = {};

    updates["/contacts/" + newPostKey] = newDog;

    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref()
        .update(updates)
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
