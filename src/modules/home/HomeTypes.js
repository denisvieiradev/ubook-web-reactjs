import Strings from "../../assets/Strings";

export const UPDATE_CONTACTS = "UPDATE_CONTACTS";
export const IS_FETCHING_CONTACTS = "IS_FETCHING_CONTACTS";
export const IS_SAVING_CONTACT = "IS_SAVING_CONTACT";
export const CONTACT_WAS_SAVED = "CONTACT_WAS_SAVED";
export const CLEAN_CONTACT_WAS_ADDED = "CLEAN_CONTACT_WAS_ADDED";
export const IS_REMOVING_CONTACT = "IS_REMOVING_CONTACT";
export const CONTACT_WAS_REMOVED = "CONTACT_WAS_REMOVED";

export const AddContactFormValidators = {
  name: {
    validators: ["required"],
    errorMessages: [Strings.requiredError]
  },
  email: {
    validators: ["required", "isEmail"],
    errorMessages: [Strings.requiredError, Strings.emailRequiredError]
  },
  phoneNumber: {
    validators: ["required"],
    errorMessages: [Strings.requiredError]
  }
};