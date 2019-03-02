import React from "react";
import injectSheet from "react-jss";
import { ubookLogo } from "../assets/Images";
import SearchField from "./SearchField"

const MainHeader = ({ classes }) => (
  <div className={classes.mainHeaderContainer}>
    <img className={classes.logoStyle} src={ubookLogo} alt="Ubook" />
    <SearchField 
      style={styles.searchFieldStyle} 
      onChange={() => console.log("teste")}/>
  </div>
);

const styles = {
  mainHeaderContainer: {
    display: "flex",
    flexDirection: "horizontal",
    marginTop: "1em"
  },
  logoStyle: {
    width: "9.188em",
    height: "2em",
    marginLeft: "1em"
  },
  searchFieldStyle: {
    flex: 3,
    marginLeft: "14.250em",
    marginRight: "1em"
  }
};

export default injectSheet(styles)(MainHeader);
