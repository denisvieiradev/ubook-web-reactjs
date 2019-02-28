import ApiDataSource from "../ApiDataSource";
import ContactsConverter from "./ContactsConverter";
import firebase from "firebase/app";
import "firebase/database";

class ContactsApiDataSource extends ApiDataSource {
  getContacts() {
  }
}

export default ContactsApiDataSource;
