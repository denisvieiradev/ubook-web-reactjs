import React from "react";
import Colors from "../assets/Colors";
import Strings from "../assets/Strings";
import injectSheet from "react-jss";
import Modal from "react-modal";

const AddContactModal = ({ classes, isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={() => closeModal()}
    style={styles.customStyles}
    // className={classes.addContactModalStyle}
    contentLabel="Example Modal"
  >
    <button onClick={() => closeModal()}>close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal>
);

const styles = {
  customStyles: {
    borderRadius: "50%"
  }
};

export default injectSheet(styles)(AddContactModal);
