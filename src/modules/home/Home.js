import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as HomeActions from "./HomeActions";
import ContactList from "./components/ContactList";
import injectSheet from "react-jss";
import MainHeader from "../../components/MainHeader"
import { ClipLoader } from "react-spinners";
import Colors from "../../assets/Colors";
import RemoveContactAlertModal from "./components/RemoveContactAlertModal"
import SaveContactModal from "./components/SaveContactModal";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasContacts: false,
      removeContactAlertModalIsOpen: false,
      editContactModalIsOpen: false,
      contactSelectedToRemove: null,
      contactSelectedToEdit: null
    };
  }

  componentWillMount() {
    this.props.loadContacts();
  }

  componentWillReceiveProps(props) {
    if (props.contacts && props.contacts.length > 0) {
      this.setState({ hasContacts: true });
    } else {
      this.setState({ hasContacts: false });
    }
  }

  showRemoveContactAlertModal(contactPressed) {
    this.setState({
      removeContactAlertModalIsOpen: true,
      contactSelectedToRemove: contactPressed
    });
  }

  hideRemoveContactAlertModal() {
    this.setState({ removeContactAlertModalIsOpen: false });
  }

  showEditContactModal(contactPressed) {
    this.setState({
      contactSelectedToEdit: contactPressed,
      editContactModalIsOpen: true
    });
  }

  hideEditContactModal() {
    this.setState({ editContactModalIsOpen: false });
  }

  render() {
    const { isFetchingContacts, contacts, classes } = this.props;
    const { contactSelectedToRemove, contactSelectedToEdit } = this.state;

    return (
      <div>
        <MainHeader hasContacts={this.state.hasContacts} />

        {isFetchingContacts ? (
          <div className={classes.spinnerContainerStyle}>
            <ClipLoader
              sizeUnit={"px"}
              size={50}
              color={Colors.gray}
              loading
            />
          </div>
        ) : (
          <ContactList
            styles={styles.contactListStyle}
            contacts={contacts}
            onClickRemoveItemList={contactPressed =>
              this.showRemoveContactAlertModal(contactPressed)
            }
            onClickEditItemList={contactPressed =>
              this.showEditContactModal(contactPressed)
            }
          />
        )}

        <RemoveContactAlertModal
          ref={this.alertModal}
          isOpen={this.state.removeContactAlertModalIsOpen}
          closeModal={() => this.hideRemoveContactAlertModal()}
          contactSelectedToRemove={contactSelectedToRemove}
        />

        <SaveContactModal
          isOpen={this.state.editContactModalIsOpen}
          closeModal={() => this.hideEditContactModal()}
          contact={contactSelectedToEdit}
        />
      </div>
    );
  }
}

const styles = {
  contactsContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  spinnerContainerStyle: {
    display: "flex",
    marginTop: "5em",
    alignItems: "center",
    justifyContent: "center"
  },
  contactListStyle: {
    marginLeft: "1em",
    marginRight: "1em",
    marginTop: "2em"
  }
};

const mapStateToProps = state => ({
  contacts: state.home.contacts,
  isFetchingContacts: state.home.isFetchingContacts
});

const mapDispatchToProps = {
  loadContacts: HomeActions.loadContacts,
  contactWasRemovedAction: HomeActions.contactWasRemoved
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(Home));
