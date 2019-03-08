import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as HomeActions from "./HomeActions";
import ContactList from "./components/ContactList";
import injectSheet from "react-jss";
import MainHeader from "../../components/MainHeader"
import { ClipLoader } from "react-spinners";
import Colors from "../../assets/Colors";
import RemoveContactAlertModal from "./components/RemoveContactAlertModal"

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasContacts: false,
      removeContactAlertModalIsOpen: false,
      contactSelectedToRemove: {}
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
    console.log("showRemoveContactAlertModal");
    this.setState({
      removeContactAlertModalIsOpen: true,
      contactSelectedToRemove: contactPressed
    });
  }

  hideRemoveContactAlertModal() {
    console.log("hideRemoveContactAlertModal");
    this.setState({ removeContactAlertModalIsOpen: false });
  }

  render() {
    const { isFetchingContacts, contacts, classes } = this.props;
    const { contactSelectedToRemove } = this.state;

    return (
      <div>
        <MainHeader hasContacts={this.state.hasContacts} />

        {isFetchingContacts ? (
          <div className={classes.spinnerContainerStyle}>
            <ClipLoader sizeUnit={"px"} size={50} color={Colors.gray} loading />
          </div>
        ) : (
          <ContactList
            styles={styles.contactListStyle}
            contacts={contacts}
            onClickRemoveItemList={contactPressed =>
              this.showRemoveContactAlertModal(contactPressed)
            }
            onClickEditItemList={contactPressed =>
              this.showRemoveContactAlertModal(contactPressed)
            }
          />
        )}

        <RemoveContactAlertModal
          ref={this.alertModal}
          isOpen={this.state.removeContactAlertModalIsOpen}
          closeModal={() => this.hideRemoveContactAlertModal()}
          contactSelectedToRemove={contactSelectedToRemove}
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
