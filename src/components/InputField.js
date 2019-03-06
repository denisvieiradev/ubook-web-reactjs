import React from "react";
import Colors from "../assets/Colors";
import Strings from "../assets/Strings";
import injectSheet from "react-jss";

const InputField = ({
  classes,
  title
}) => (
    <div className={classes.mainContainer}>
      <label className={classes.title}>{title}</label>
      <input className={classes.inputStyle}/>
    </div>
  );

const styles = {
  title: {
    marginBottom: "0.286em"
  },
  inputStyle: {
    borderRadius: "4px",
    border: "solid 1px",
    borderColor: Colors.bigLightBlue, 
    paddingLeft: "0.714em",
    paddingRight: "0.714em",
    paddingTop: "0.643em",
    paddingBottom: "0.500em"
  },
  mainContainer: props => ({
    ...props.styles,
    display: "flex",
    flexDirection: "column"
  })
};

export default injectSheet(styles)(InputField);
