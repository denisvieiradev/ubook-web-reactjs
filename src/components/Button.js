import React from "react";
import Colors from "../assets/Colors";
import injectSheet from "react-jss";

const Button = ({ classes, text, type, textColor, color,  }) => (
  <button 
    className={classes.buttonStyle} 
    type={type}>
    {text}
  </button>
);

const styles = {
  buttonStyle: props => ({
    ...props.styles,
    color: props.textColor,
    backgroundColor: props.color,
    padding: "0.750em",
    borderRadius: "1.250em",
    boxShadow: "0 0.125em 0.250em 0 rgba(0, 0, 0, 0.16)",
    border: "solid 1px rgba(255, 255, 255, 0.16)",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  })
};

export default injectSheet(styles)(Button);
