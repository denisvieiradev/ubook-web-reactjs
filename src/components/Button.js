import React from "react";
import injectSheet from "react-jss";

const Button = ({ classes, text, type, onClick }) => (
  <button
    className={classes.buttonStyle}
    type={type}
    onClick={() => onClick && onClick()}
  >
    {text}
  </button>
);

const styles = {
  buttonStyle: props => ({
    ...props.styles,
    color: props.textColor,
    backgroundColor: props.color,
    paddingLeft: "1.143em",
    paddingRight: "1.143em",
    paddingTop: "0.571em",
    paddingBottom: "0.571em",
    borderRadius: "1.250em",
    boxShadow: "0 0.125em 0.250em 0 rgba(0, 0, 0, 0.16)",
    border: "solid 1px rgba(255, 255, 255, 0.16)",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    cursor: "pointer"
  })
};

export default injectSheet(styles)(Button);
