import { UPDATE_CONTACTS, IS_FETCHING_CONTACTS } from "./HomeTypes";

export const INITIAL_STATE = {
  contacts: [],
  isFetchingContacts: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CONTACTS:
      return { ...state, contacts: action.payload };
    case IS_FETCHING_CONTACTS:
      return { ...state, isFetchingContacts: action.payload };
    default:
      return state;
  }
};
