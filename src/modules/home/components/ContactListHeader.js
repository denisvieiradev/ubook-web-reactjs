import React from "react";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import injectSheet from "react-jss";

const ContactListHeader = ({ classes }) => (
  <div className={classes.headerContainer}>
    <label className={classes.listHeaderItem}></label>
    <label className={classes.listHeaderItem}>{Strings.contacts}</label>
    <label className={classes.listHeaderItem}>{Strings.email}</label>
    <label className={classes.listHeaderItem}>{Strings.phoneNumber}</label>
    <label className={classes.listHeaderItem}></label>
  </div>
);

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: "4px",
    border: "solid 1px",
    borderColor: Colors.bigLightGray,
    backgroundColor: Colors.white,
    paddingTop: "1em",
    paddingBottom: "0.563em",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px"
  },
  listHeaderItem: {
    flex: 1,
    color: Colors.gray,
    "&:first-child": {
      flex: 0.2
    },
    "&:last-child": {
      flex: 0.2
    }
  }
};

export default injectSheet(styles)(ContactListHeader);
