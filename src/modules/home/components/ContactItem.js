import React from "react";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import { editIcon, deleteIcon } from "../../../assets/Images";
import injectSheet from "react-jss";
import InitialLetterBall from "./InitialLetterBall";

const ContactItem = ({ classes, contact }) => (
  <div className={classes.itemContainer}>
    <div className={classes.itemStyle}> <InitialLetterBall contactName={contact.name}/> </div>
    <label className={classes.itemStyle}>{contact.name}</label>
    <label className={classes.itemStyle}>{contact.email}</label>
    <label className={classes.itemStyle}>{contact.phoneNumber}</label>
    <div className={classes.itemStyle}>
      <img className={classes.actionIconStyle} src={editIcon} alt="Edit" />
      <img className={classes.actionIconStyle} src={deleteIcon} alt="Delete" />
    </div>
  </div>
);

const styles = {
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    border: "solid 1px",
    borderColor: Colors.bigLightGray,
    backgroundColor: Colors.white,
    paddingTop: "1em",
    paddingBottom: "0.563em",
    borderTop: "none",
    "&:last-child": {
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px"
    },
    "&:hover": {
      backgroundColor: Colors.pink
    }
  },
  itemStyle: {
    flex: 1,
    color: Colors.gray,
    "&:first-child": {
      flex: 0.2
    },
    "&:last-child": {
      flex: 0.2,
      display: "flex"
    }
  },
  actionIconStyle: {
    width: "1em",
    height: "1em",
    cursor: "pointer",
    marginRight: "1em"
  }
};

export default injectSheet(styles)(ContactItem);
