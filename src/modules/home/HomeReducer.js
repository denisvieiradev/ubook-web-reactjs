import {
  UPDATE_CONTACTS,
  IS_FETCHING_CONTACTS,
  IS_SAVING_CONTACT,
  CONTACT_WAS_SAVED,
  IS_REMOVING_CONTACT,
  CONTACT_WAS_REMOVED
} from "./HomeTypes";

export const INITIAL_STATE = {
  contacts: [],
  isFetchingContacts: false,
  isSavingContact: false,
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
    case IS_SAVING_CONTACT:
      return { ...state, isSavingContact: action.payload };
    case IS_REMOVING_CONTACT:
      return { ...state, isRemovingContact: action.payload };
    case CONTACT_WAS_SAVED:
      return contactWasSavedAction(state, action.payload);
    case CONTACT_WAS_REMOVED:
      return contactWasRemovedAction(state, action.payload)
    default:
      return state;
  }
};

const contactWasSavedAction = (state, payload) => {
  if (payload) {
    let newContactsAfterSaved = [...state.contacts]

    if (hasContactIdOnList(state.contacts, payload)){
      newContactsAfterSaved = state.contacts.map(
        obj => payload.id === obj.id ? payload : obj
      ); 
    } else {
      newContactsAfterSaved = newContactsAfterSaved.concat(payload);
    }

    return {
      ...state,
      contactWasAdded: payload,
      contacts: newContactsAfterSaved
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

const hasContactIdOnList = (contacts, savedContact) => {
  var hasContact = false
  contacts.forEach(contact => {
    if(contact.id === savedContact.id){
      hasContact = true
    }
  });

  return hasContact
}