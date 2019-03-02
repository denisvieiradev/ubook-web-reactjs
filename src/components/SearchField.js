import React from "react";
import Colors from "../assets/Colors";
import { searchIcon } from "../assets/Images";
import Strings from "../assets/Strings";
import injectSheet from "react-jss";

const SearchField = ({ onChange, classes, inputName }) => (
  <div className={classes.searchFieldContainer}>
    <input
      className={classes.inputStyle}
      onChange={onChange}
      name={inputName}
      placeholder={Strings.search}
    />
    <img
      className={classes.searchIcon}
      src={searchIcon}
      alt="Search"
      onClick={() => onChange()}
    />
  </div>
);

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

export default injectSheet(styles)(SearchField);
