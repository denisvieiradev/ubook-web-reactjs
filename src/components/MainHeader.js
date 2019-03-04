import React from "react";
import injectSheet from "react-jss";
import { ubookLogo } from "../assets/Images";
import SearchField from "./SearchField"
import AddContactButton from "./AddContactButton";

const MainHeader = ({ classes, hasContacts }) => (
  <div className={classes.mainHeaderContainer}>
    <img className={classes.logoStyle} src={ubookLogo} alt="Ubook" />
    <div>
      <AddContactButton />
    </div>
    <SearchField 
      style={styles.searchFieldStyle} 
      onChange={() => console.log("teste")}/>
  </div>
);

const styles = {
  mainHeaderContainer: {
    display: "flex",
    flexDirection: "horizontal",
    marginTop: "1em",
    marginLeft: "1em"
  },
  logoStyle: {
    width: "9.188em",
    height: "2em",
  },
  searchFieldStyle: {
    flex: 2,
    marginLeft: "14.250em"
  }
};

export default injectSheet(styles)(MainHeader);
