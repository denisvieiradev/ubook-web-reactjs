import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as HomeActions from "../HomeActions";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import injectSheet from "react-jss";
import Modal from "react-modal";
import Button from "../../../components/Button";

class RemoveContactConfirmationModal extends PureComponent {

  state = {
    modalIsOpen: true,
  }

  componentWillReceiveProps(props){
    
  }

  onClickSubmit() {
    this.props.createContact(contact);
  }

  render() {
    const { classes, isOpen, closeModal } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => closeModal()}
        style={styles.customStyles}
      >
        <header className={classes.addContactHeader}>
          <label className={classes.mainTitle}>{Strings.createANewContact}</label>
        </header>

        <p>{Strings.removeContactConfirmation}</p>
 
        <footer className={classes.addContactfooter}>
            <label
              className={classes.cancelButton}
              onClick={() => closeModal()}
            >
              {Strings.cancel}
            </label>
            <Button
              textColor={Colors.white}
              color={Colors.lightPink}
              isDisabled={submitIsDisabled}
              isLoading={isCreatingContact}
              text={Strings.save}
              type="submit"
            />
          </footer>
      </Modal>
    );
  }
}

const styles = {
  customStyles: {
    content: {
      display: "flex",
      width: "30%",
      height: "55%",
      flexDirection: "column",
      borderRadius: "1em",
      padding: 0,
      position: "absolute",
      top: "25%",
      left: "35%",
      marginTop: "-50px",
      marginLeft: "-50px",
    }
  },
  addContactHeader: {
    paddingTop: "1.143em",
    paddingLeft: "1.143em",
    paddingBottom: "0.893em"
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
    color: Colors.lightPink,
    cursor: "pointer"
  },
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(RemoveContactConfirmationModal));
