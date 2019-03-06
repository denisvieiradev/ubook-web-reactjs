import React, { PureComponent } from "react";
import Colors from "../assets/Colors";
import Strings from "../assets/Strings";
import injectSheet from "react-jss";
import Modal from "react-modal";
import Button from "../components/Button"
import InputField from "./InputField";

class AddContactModal extends PureComponent {

  state = {
    modalIsOpen: true
  };

  onClickSubmit(event) {
    event.preventDefault();
    console.log("submit")
  }

  render() {
    const { classes, isOpen, closeModal, onSubmit } = this.props
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => closeModal()}
        style={styles.customStyles}
      >
        <header className={classes.addContactHeader}>
          <label className={classes.mainTitle}>Criar Novo Contato</label>
        </header>
        <form
          className={classes.addContactForm}
          onSubmit={e => this.onClickSubmit(e)}
        >
          <hr />
          <div className={classes.addContactFields}>
            <InputField
              styles={styles.addContactField}
              title={"Nome"}
              onChange={text => console.log(text)}
            />
            <InputField
              styles={styles.addContactField}
              title={"E-mail"}
              onChange={text => console.log(text)}
            />
            <InputField
              styles={styles.addContactField}
              title={"Telefone"}
              onChange={text => console.log(text)}
            />
          </div>
          <hr />
          <div className={classes.addContactfooter}>
            <label
              className={classes.cancelButton}
              onClick={() => closeModal()}
            >
              Cancelar
            </label>
            <Button
              textColor={Colors.white}
              color={Colors.lightPink}
              text="Salvar"
              type="submit"
            />
          </div>
        </form>
      </Modal>
    );
  }
}

const styles = {
  mainTitle: {
    fontSize: "1.143em"
  },
  addContactHeader: {
    paddingTop: "1.143em",
    paddingLeft: "1.143em",
    paddingBottom: "0.893em"
  },
  addContactField: {
    marginTop: "1em"
  },
  addContactFields: {
    paddingTop: "0.393em",
    paddingBottom: "1.571em",
    paddingLeft: "1.714em",
    paddingRight: "1.714em"
  },
  addContactfooter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: "1.071em",
    paddingBottom: "1.143em",
    paddingRight: "1.143em"
  },
  cancelButton: {
    marginRight: "1.143em",
    color: Colors.lightPink
  },
  customStyles: {
    content: {
      display: "flex",
      width: "50%",
      height: "60%",
      flexDirection: "column",
      borderRadius: "1em",
      padding: 0
    }
  }
};

export default injectSheet(styles)(AddContactModal);
