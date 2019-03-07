import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as HomeActions from "../HomeActions";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import Button from "../../../components/Button"
import injectSheet from "react-jss";
import AddContactModal from "./AddContactModal"

class AddContactButton extends PureComponent {
  
  state = {
    modalIsOpen: false
  };

  componentWillReceiveProps(props) {
    if (props.contactWasAdded){
      this.hideAddContactModal()
    }
  }

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

const mapStateToProps = state => ({
  contactWasAdded: state.home.contactWasAdded
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(AddContactButton));
