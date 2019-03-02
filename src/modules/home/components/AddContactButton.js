import React from "react";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import Button from "../../../components/Button"
import injectSheet from "react-jss";

const AddContactButton = ({ classes, text, styles }) => (
  <Button
    styles={styles}
    className={classes.addContactStyle}
    textColor={Colors.lightPink}
    color={Colors.biglightGreen}
    text="+ Criar Contato"
    type="button"
  />
);

const styles = {
  addContactStyle: props => ({
    ...props.style,
  }),
}

export default injectSheet(styles)(AddContactButton);
