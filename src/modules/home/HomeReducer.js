import { 
  UPDATE_CONTACTS, 
  IS_FETCHING_CONTACTS, 
  IS_CREATING_CONTACT, 
  CONTACT_WAS_ADDED
} from "./HomeTypes";

export const INITIAL_STATE = {
  contacts: [],
  isFetchingContacts: false,
  contactWasAdded: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CONTACTS:
      return { ...state, contacts: action.payload };
    case IS_FETCHING_CONTACTS:
      return { ...state, isFetchingContacts: action.payload };
    case IS_CREATING_CONTACT:
      return { ...state, isCreatingContact: action.payload };
    case CONTACT_WAS_ADDED:
      return { ...state, contactWasAdded: action.payload };
    default:
      return state;
  }
};
