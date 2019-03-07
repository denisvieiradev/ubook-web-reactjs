import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as HomeActions from "./HomeActions";
import ContactList from "./components/ContactList";
import injectSheet from "react-jss";
import MainHeader from "../../components/MainHeader"
import { ClipLoader } from "react-spinners";
import Colors from "../../assets/Colors";


class Home extends PureComponent {

  state = {
    hasContacts: false,
  };

  componentWillMount() {
    this.props.loadContacts();
  }

  componentWillReceiveProps({contacts}) { 
    if (contacts && contacts.length > 0) {
      this.setState({ hasContacts: true})
    } else {
      this.setState({ hasContacts: false })
    }
  }

  render() {
    const { isFetchingContacts, contacts, classes } = this.props;

    return (
      <div>
        <MainHeader hasContacts={this.state.hasContacts}/>
        
        {isFetchingContacts ? (
          <div className={classes.spinnerContainerStyle}>
            <ClipLoader sizeUnit={"px"} size={50} color={Colors.gray} loading />
          </div>
        ) : (
          <ContactList 
            styles={styles.contactListStyle}
            contacts={contacts}
          />
        )}
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
  loadContacts: HomeActions.loadContacts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(Home));
