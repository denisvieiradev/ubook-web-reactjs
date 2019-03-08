import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import Button from "../../../components/Button"
import injectSheet from "react-jss";
import SaveContactModal from "./SaveContactModal"

class AddContactButton extends PureComponent {
  
  state = {
    modalIsOpen: false
  };

  showSaveContactModal() {
    this.setState({ modalIsOpen: true })
  }

  hideSaveContactModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.addContactStyle}>
        <Button
          textColor={Colors.lightPink}
          color={Colors.biglightGreen}
          text={Strings.createContact}
          type="button"
          onClick={() => this.showSaveContactModal()}
        />
        <SaveContactModal
          isOpen={this.state.modalIsOpen}
          closeModal={() => this.hideSaveContactModal()}
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

const mapStateToProps = state => ({
  contactWasAdded: state.home.contactWasAdded
});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(AddContactButton));
