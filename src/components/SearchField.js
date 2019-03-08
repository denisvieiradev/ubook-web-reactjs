import React, { PureComponent } from "react";
import Colors from "../assets/Colors";
import { searchIcon } from "../assets/Images";
import Strings from "../assets/Strings";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import * as HomeActions from "../modules/home/HomeActions";

class SearchField extends PureComponent {
  state = {
    baseContactsList: null,
    searchText: ""
  };

  componentWillReceiveProps(props) {
    if (this.state.baseContactsList == null) {
      this.setState({
        baseContactsList: props.contacts
      })
    }

    if (props.contactWasSaved || props.contactWasRemoved) {
      this.cleanSearchFieldInputAndBaseList()
      this.setState({
        baseContactsList: props.contacts
      })
    }
  }

  cleanSearchFieldInputAndBaseList() {
    this.setState({
      searchText: "",
      baseContactsList: null
    })
  }

  updateSearchValue(text) {
    this.setState({
      searchText: text
    }, () => {
      this.onChangeToSearch(text)
    });
  }

  onChangeToSearch(text) {
    const { baseContactsList } = this.state;
    // this.props.filterContactsOnHome(baseContactsList, text);
  }

  render() {
    const { classes, inputName } = this.props;
    const { searchText } = this.state;
    return (
      <div className={classes.searchFieldContainer}>
        <input
          ref={c => (this.title = c)}
          className={classes.inputStyle}
          value={searchText}
          onChange={text => this.updateSearchValue(text.target.value)}
          name={inputName}
          placeholder={Strings.search}
        />
        <img
          className={classes.searchIcon}
          src={searchIcon}
          alt={Strings.search}
        />
      </div>
    );
  }
}

const styles = {
  inputStyle: {
    width: "100%",
    fontSize: "1em",
    padding: "0.3em",
    borderRadius: "0.250em",
    border: "none",
    backgroundColor: Colors.lightGray,
    "&::placeholder": {
      color: Colors.gray
    }
  },
  searchIcon: {
    width: '1em',
    height: '1em',
    position: "relative",
    right: "1.5em",
    top: "0.5em"
  },
  searchFieldContainer: ({ style }) => ({
    ...style,
    display: 'inline-flex'
  })
};

const mapStateToProps = state => ({
  contacts: state.home.contacts,
  contactWasSaved: state.home.contactWasSaved,
  contactWasRemoved: state.home.contactWasRemoved,
});

const mapDispatchToProps = {
  filterContactsOnHome: HomeActions.filterContactsOnHome,
  loadContacts: HomeActions.loadContacts,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(SearchField));
