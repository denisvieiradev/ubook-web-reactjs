import React from "react";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import injectSheet from "react-jss";

const InitialLetterBall = ({ classes, contactName }) => {
  const initialLetter = contactName.charAt(0)
  return (
    <div className={classes.ballStyle}>
      <label>{initialLetter}</label>
    </div>
  );
}

const styles = {
  ballStyle: {
    width: "1.714em",
    height: "1.714em",
    backgroundColor: Colors.blue,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    "& > label": {
      textTransform: "uppercase",
      color: Colors.white
    }
  }
};

export default injectSheet(styles)(InitialLetterBall);
