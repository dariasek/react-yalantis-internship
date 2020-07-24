import React, { Component } from "react";
import styles from "./Month.module.css";

class Month extends Component {
  state = {
    peopleListDisplay: "none",
    monthDisplay: "flex",
    leftTextVisibility: "hidden",
    // colorDivStyle: 'false',
  };

  changeVisibility = () => {
    if (this.state.peopleListDisplay == "none") {
      this.setState({
        monthDisplay: "none",
        peopleListDisplay: "block",
        leftTextVisibility: "visible",
        // colorDivStyle:'true'
      });
    } else {
      this.setState({
        peopleListDisplay: "none",
        monthDisplay: "flex",
        leftTextVisibility: "hidden",
        // colorDivStyle:false,
      });
    }
  };

  render() {
    let peopleList = this.props.data.filter((el) => {
      let date = new Date(el.dob);
      let monthOfBirth = date.getMonth() + 1;
      return monthOfBirth == this.props.month.id;
    });

    let peopleListName = peopleList.map((el) => {
      let newDob = new Date(el.dob);
      let dd = newDob.getDate();
      let mm = newDob.getMonth() + 1;
      let yyyy = newDob.getFullYear();
      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }
      newDob = `${mm}/${dd}/${yyyy}`;
      return (
        <div className={styles.peopleListItem}>
          <div> {el.firstName + " " + el.lastName}</div>
          <div>{newDob}</div>
        </div>
      );
    });

    // let peopleListNames = peopleList.map(
    //   (el) => el.firstName + " " + el.lastName
    // );

    let styleColor;
    if (peopleList.length >= 11) {
      styleColor = "#E35555";
    } else if (peopleList.length <= 10 && peopleList.length >= 7) {
      styleColor = "#ADE355";
    } else if (peopleList.length <= 6 && peopleList.length >= 3) {
      styleColor = "#55AEE3";
    } else if (peopleList.length <= 2 && peopleList.length >= 0) {
      styleColor = "#D9DADA";
    }

    return (
      <div
        className={styles.month}
        onMouseEnter={this.changeVisibility}
        onMouseLeave={this.changeVisibility}
        style={{ borderColor: styleColor }}
        id={this.props.month.name}
      >
        <div
          className={styles.colorDiv}
          // style={{ backgroundColor: (this.state.colorDivStyle) ? styleColor : 'white' }}
          style={{ backgroundColor: styleColor }}
        >
          <div
            className={styles.textLeft}
            style={{ visibility: this.state.leftTextVisibility }}
          >
            {this.props.month.name}
          </div>
        </div>
        <div
          className={styles.monthName}
          style={{ display: this.state.monthDisplay }}
        >
          {this.props.month.name}
        </div>
        <div
          className={styles.peopleList}
          style={{ display: this.state.peopleListDisplay }}
        >
          {peopleListName}
        </div>
      </div>
    );
  }
}

export default Month;
