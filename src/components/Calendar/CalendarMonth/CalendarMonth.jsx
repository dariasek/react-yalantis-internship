import React, { Component } from "react";
import styles from "./CalendarMonth.module.css";

class CalendarMonth extends Component {
  state = {
    linkDecoration: "none",
  };

  changeDecoration = () => {
    if (this.state.linkDecoration === "none") {
      this.setState({ linkDecoration: "underline darkgrey" });
    } else {
      this.setState({ linkDecoration: "none" });
    }
  };

  render() {
    return (
      <div>
        <a
          className={styles.calendarMonth}
          href={`#${this.props.month.name}`}
          onMouseEnter={this.changeDecoration}
          onMouseLeave={this.changeDecoration}
          style={{
            textDecoration: this.state.linkDecoration,
          }}
        >
          {this.props.month.name.slice(0, 3)}
        </a>
      </div>
    );
  }
}

export default CalendarMonth;
