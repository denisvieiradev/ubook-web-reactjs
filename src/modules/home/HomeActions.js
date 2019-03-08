import ContactsService from "../../services/contacts/ContactsService";
import {
  UPDATE_CONTACTS,
  IS_FETCHING_CONTACTS,
  IS_CREATING_CONTACT,
  CONTACT_WAS_ADDED,
  IS_REMOVING_CONTACT,
  CONTACT_WAS_REMOVED
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

export const isRemovingContact = isRemoving => ({
  type: IS_REMOVING_CONTACT,
  payload: isRemoving
});

export const contactWasAdded = contact => ({
  type: CONTACT_WAS_ADDED,
  payload: contact
});

export const contactWasRemoved = contact => ({
  type: CONTACT_WAS_REMOVED,
  payload: contact
});

export const cleanContactWasRemoved = contact => ({
  type: CONTACT_WAS_REMOVED,
  payload: contact
});

export const loadContacts = () => {
  return async dispatch => {
    dispatch(isFetchingContacts(true));

    const contacts = await new ContactsService().getContacts();

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

export const removeContact = (contact) => {
  return async dispatch => {
    dispatch(isRemovingContact(true));

    const contactRemoved = await new ContactsService().removeContact(contact);

    dispatch(contactWasRemoved(contactRemoved));
    
    dispatch(isRemovingContact(false));
  };
};
