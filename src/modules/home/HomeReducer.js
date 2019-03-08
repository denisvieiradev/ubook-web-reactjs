import {
  UPDATE_CONTACTS,
  IS_FETCHING_CONTACTS,
  IS_CREATING_CONTACT,
  CONTACT_WAS_ADDED,
  IS_REMOVING_CONTACT,
  CONTACT_WAS_REMOVED
} from "./HomeTypes";

export const INITIAL_STATE = {
  contacts: [],
  isFetchingContacts: false,
  isCreatingContact: false,
  isRemovingContact: false,
  contactWasAdded: null,
  contactWasRemoved: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CONTACTS:
      return { ...state, contacts: action.payload };
    case IS_FETCHING_CONTACTS:
      return { ...state, isFetchingContacts: action.payload };
    case IS_CREATING_CONTACT:
      return { ...state, isCreatingContact: action.payload };
    case IS_REMOVING_CONTACT:
      return { ...state, isRemovingContact: action.payload };
    case CONTACT_WAS_ADDED:
      return contactWasAddedAction(state, action.payload);
    case CONTACT_WAS_REMOVED:
      return contactWasRemovedAction(state, action.payload)
    default:
      return state;
  }
};

const contactWasAddedAction = (state, payload) => {
  if (payload) {
    const newContactsAfterAdded = [...state.contacts.concat(payload)];
    return {
      ...state,
      contactWasAdded: payload,
      contacts: newContactsAfterAdded
    };
  } else {
    return {
      ...state,
      contactWasAdded: payload,
    }
  }
}

const contactWasRemovedAction = (state, payload) => {
  if (payload) {
    const newContactsAfterRemoved = [...state.contacts.filter((value) => value !== payload)];
    return {
      ...state,
      contactWasRemoved: payload,
      contacts: newContactsAfterRemoved
    };
  } else {
    return {
      ...state,
      contactWasRemoved: payload
    };
  }
}

