import React, { PureComponent } from "react";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import { editIcon, deleteIcon } from "../../../assets/Images";
import injectSheet from "react-jss";
import InitialLetterBall from "./InitialLetterBall";

class ContactItem extends PureComponent {

  state = {
    isItemHighlight: false,
  }

  componentWillReceiveProps(props) {
    if(props.lastContactWasSaved === this.props.contact){
      this.showHighLightOnItem()
    }
  }

  showHighLightOnItem() {
    this.setState({
      isItemHighlight: true
    })
    setTimeout(() => { 
      this.setState({
        isItemHighlight: false
      })
    }, 10000);
  }

  render() {
    const { classes, contact, onClickRemove, onClickEdit } = this.props
    const { isItemHighlight } = this.state

    return (
      <div className={classes.itemContainer} style={isItemHighlight ? 
        {backgroundColor: Colors.pink} : { backgroundColor: Colors.white}}>
      <div className={classes.itemStyle}>
        {" "}
        <InitialLetterBall contactName={contact.name} />{" "}
      </div>
      <label className={classes.itemStyle}>{contact.name}</label>
      <label className={classes.itemStyle}>{contact.email}</label>
      <label className={classes.itemStyle}>{contact.phoneNumber}</label>
      <div className={classes.itemStyle}>
        <img
          onClick={onClickEdit}
          className={classes.actionIconStyle}
          src={editIcon}
          alt={Strings.edit}
        />
        <img
          onClick={onClickRemove}
          className={classes.actionIconStyle}
          src={deleteIcon}
          alt={Strings.remove}
        />
      </div>
    </div>
    )
  }
}

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
    display: "flex",
    color: Colors.bigGray,
    alignItems: "center",
    "&:first-child": {
      flex: 0.2,
      justifyContent: "center"
    },
    "&:last-child": {
      flex: 0.2
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
