import ContactsService from "../../services/contacts/ContactsService";
import { UPDATE_CONTACTS, IS_FETCHING_CONTACTS } from "./HomeTypes";

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

export const loadContacts = () => {
  return async dispatch => {
    dispatch(isFetchingContacts(true));

    const contacts = await new ContactsService().getContacts();

    dispatch(updateContacts(contacts));
    dispatch(isFetchingContacts(false));
  };
};
