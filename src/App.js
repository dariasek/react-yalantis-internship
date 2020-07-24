import React, { Component } from "react";
import "./App.css";
import Month from "./components/Month/Month";
import Calendar from "./components/Calendar/Calendar";

class App extends Component {
  state = {
    months: [
      { id: 1, name: "January" },
      { id: 2, name: "February" },
      { id: 3, name: "March" },
      { id: 4, name: "April" },
      { id: 5, name: "May" },
      { id: 6, name: "June" },
      { id: 7, name: "July" },
      { id: 8, name: "August" },
      { id: 9, name: "September" },
      { id: 10, name: "October" },
      { id: 11, name: "November" },
      { id: 12, name: "December" },
    ],
  };

  render() {
    let months = this.state.months.map((el) => (
      <Month month={el} data={this.props.data} />
    ));

    return (
      <div className="App">
        <Calendar months={this.state.months} />
        <div className="months">{months}</div>
      </div>
    );
  }
}

export default App;
