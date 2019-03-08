import ContactsService from "../../services/contacts/ContactsService";
import {
  UPDATE_CONTACTS,
  IS_FETCHING_CONTACTS,
  IS_SAVING_CONTACT,
  CONTACT_WAS_SAVED,
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

export const isSavingContact = isSaving => ({
  type: IS_SAVING_CONTACT,
  payload: isSaving
});

export const isRemovingContact = isRemoving => ({
  type: IS_REMOVING_CONTACT,
  payload: isRemoving
});

export const contactWasAdded = contact => ({
  type: CONTACT_WAS_SAVED,
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

export const saveContact = (contact) => {
  return async dispatch => {
    dispatch(isSavingContact(true));

    const contactAdded = await new ContactsService().saveContact(contact);

    dispatch(contactWasAdded(contactAdded));
    
    dispatch(isSavingContact(false));
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
