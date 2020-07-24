import React, { Component } from "react";
import styles from "./Calendar.module.css";
import CalendarMonth from "./CalendarMonth/CalendarMonth";

class Calendar extends Component {
  state = { };

  render() {
    let monthLinks = this.props.months.map((el) => <CalendarMonth month={el} /> );

    return <div className={styles.calendar}>{monthLinks}</div>;
  }
}

export default Calendar;
