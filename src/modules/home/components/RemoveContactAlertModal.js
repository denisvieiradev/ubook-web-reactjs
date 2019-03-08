import React, { PureComponent } from "react";
import { connect } from "react-redux"; 
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import injectSheet from "react-jss";
import Modal from "react-modal";
import Button from "../../../components/Button";
import * as HomeActions from "../HomeActions";

class RemoveContactAlertModal extends PureComponent {

  componentWillReceiveProps(props) {
    if (props.contactWasRemoved) {
      this.props.closeModal();
      this.props.contactWasRemovedAction(null);
    }
  }

  onConfirmRemove() {
    const { contactSelectedToRemove, removeContact} = this.props

    removeContact(contactSelectedToRemove);
  }
  

  render() {
    const { classes, isOpen, closeModal, isRemovingContact } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        style={styles.customStyles}
      >
        <header className={classes.addContactHeader}>
          <label className={classes.mainTitle}>
            {Strings.removeContact}
          </label>
        </header>

        <div>
          <hr />
          <label className={classes.removeInfoContainer}>
            {Strings.removeContactConfirmation}
          </label>
          <hr />
        </div>

        <footer className={classes.addContactfooter}>
          <label
            className={classes.cancelButton}
            onClick={() => closeModal()}
          >
            {Strings.cancel}
          </label>
          <Button
            onClick={() => this.onConfirmRemove()}
            textColor={Colors.white}
            color={Colors.lightPink}
            isLoading={isRemovingContact}
            text={Strings.delete}
            type="button"
          />
        </footer>
      </Modal>
    );
  }
}

const styles = {
  removeInfoContainer: {
    display: "flex",
    marginTop: "1.393em",
    marginBottom: "4.071em",
    marginLeft: "1.143em"
  },
  customStyles: {
    content: {
      display: "flex",
      width: "30.857em",
      height: "14.786em",
      flexDirection: "column",
      borderRadius: "1em",
      padding: 0,
      position: "absolute",
      top: "25%",
      left: "35%",
      marginTop: "-50px",
      marginLeft: "-50px"
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
    paddingRight: "1.143em"
  },
  cancelButton: {
    marginRight: "1.143em",
    color: Colors.lightPink,
    cursor: "pointer"
  }
};

const mapStateToProps = state => ({
  isRemovingContact: state.home.isRemovingContact,
  contactWasRemoved: state.home.contactWasRemoved
});

const mapDispatchToProps = {
  removeContact: HomeActions.removeContact,
  contactWasRemovedAction: HomeActions.contactWasRemoved
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(RemoveContactAlertModal));
