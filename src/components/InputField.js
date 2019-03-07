import React from "react";
import Colors from "../assets/Colors";
import Strings from "../assets/Strings";
import injectSheet from "react-jss";
import { ValidatorComponent } from "react-form-validator-core";

class InputField extends ValidatorComponent { 

  errorText() {
    const { isValid } = this.state;
    const { classes } = this.props;

    if (isValid) {
      return null;
    }

    return (
      <label className={classes.errorTextStyle}>
        {this.getErrorMessage()}
      </label>
    );
  }
 
  render () {
    const {
      errorMessages, 
      validators, 
      requiredError, 
      validatorListener,
      classes,
      title,
      styles,
      value,
      onChange,
      ...rest
    } = this.props;

    return (
      <div className={classes.mainContainer}>
        <label className={classes.title}>{title}</label>
        <input
          {...rest}
          onChange={text => onChange(text.target.value)}
          value={value}
          className={classes.inputStyle}
        />
        {this.errorText()}
      </div>
    );
  }

}
const styles = {
  errorTextStyle: {
    color: Colors.red,
    marginTop: "0.286em"
  },
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
