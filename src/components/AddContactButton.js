import React, { PureComponent } from "react";
import Colors from "../assets/Colors";
import Strings from "../assets/Strings";
import Button from "./Button"
import injectSheet from "react-jss";
import AddContactModal from "./AddContactModal"

class AddContactButton extends PureComponent {
  
  state = {
    modalIsOpen: true
  };

  showAddContactModal() {
    this.setState({ modalIsOpen: true })
  }

  hideAddContactModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.addContactStyle}>
        <Button
          textColor={Colors.lightPink}
          color={Colors.biglightGreen}
          text="+ Criar Contato"
          type="button"
          onClick={() => this.showAddContactModal()}
        />
        <AddContactModal
          isOpen={this.state.modalIsOpen}
          closeModal={() => this.hideAddContactModal()}
        />
      </div>
    );
  }

}

const styles = {
  addContactStyle: props => ({
    ...props.styles,
  }),
}

export default injectSheet(styles)(AddContactButton);
