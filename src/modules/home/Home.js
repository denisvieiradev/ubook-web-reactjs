import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as HomeActions from "./HomeActions";
import ContactItem from "./components/ContactItem";
import injectSheet from "react-jss";

import { ClipLoader } from "react-spinners";
import Colors from "../../assets/Colors";

class Home extends PureComponent {

  componentWillMount() {
    this.props.loadContacts();
  }

  render() {
    const { isFetchingContacts, contacts, classes } = this.props;

    return (
      <div>
        <p>TESTEEE</p>
        {isFetchingContacts ? (
          <div className={classes.spinnerContainerStyle}>
            <ClipLoader sizeUnit={"px"} size={50} color={Colors.gray} loading />
          </div>
        ) : (
          <div className={classes.newsContainer}>

          </div>
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
