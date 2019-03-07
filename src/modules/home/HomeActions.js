import ContactsService from "../../services/contacts/ContactsService";
import {
  UPDATE_CONTACTS,
  IS_FETCHING_CONTACTS,
  IS_CREATING_CONTACT,
  CONTACT_WAS_ADDED
} from "./HomeTypes";

export const updateContacts = contacts => {
  return {
    type: UPDATE_CONTACTS,
    payload: contacts
  };
};

export const isFetchingContacts = isFetching => ({
  type: IS_FETCHING_CONTACTS,
  payload: isFetching
});

export const isCreatingContact = isCreating => ({
  type: IS_CREATING_CONTACT,
  payload: isCreating
});

export const contactWasAdded = contact => ({
  type: CONTACT_WAS_ADDED,
  payload: contact
});

export const cleanContactWasAdded = () => {
  return async dispatch => {
    dispatch(contactWasAdded(null));
  };
};

export const loadContacts = () => {
  return async dispatch => {
    dispatch(isFetchingContacts(true));

    const contacts = await new ContactsService().getContacts();
    console.log(contacts)

    dispatch(updateContacts(contacts));
    dispatch(isFetchingContacts(false));
  };
};

export const createContact = (contact) => {
  return async dispatch => {
    dispatch(isCreatingContact(true));

    const contactAdded = await new ContactsService().createContact(contact);

    dispatch(contactWasAdded(contactAdded));
    
    dispatch(isCreatingContact(false));
  };
};
