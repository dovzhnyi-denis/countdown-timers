import React, { Component } from "react";
import { Container,
  Row,
  Col,
  } from "react-bootstrap";
import Countdown from "./components/countdown";
import sortCountdown from "./sortCountdown";
import MainBar from "./components/main_bar";
import './App.css';

export default class App extends Component {
  state = {
    countdowns: []
  };

  componentDidMount() {
    // load dates from local storage if they were saved there
    const localCountdowns = JSON.parse(localStorage.getItem("countdowns"));
    if (localCountdowns) {
      this.setState(() => ({
        countdowns: localCountdowns
      }));
    } else {
      this.setState(() => ({
        countdowns: []
      }));
    }
  }

  addCountdown = ({errMsg, inputName, inputDate}) => {
    // convert date input into numbers array
    const name = inputName.value;
    const dateArr = inputDate.value.match(/\d+/g);
    // validate entered date, required for safari since it doesn't support
    // "required" form attribute
    if (!dateArr && dateArr.length > 0) {
      errMsg.innerHTML = "Enter valid date";
      errMsg.style.visibility = "visible";
      return -1;
    }
    const newCountdown = {
      name,
    // create new date from using dateArr and return it in milliseconds
      endDate: new Date(dateArr).getTime()
    };
    // validate unique name, required for safari since it doesn't support
    // "required" form attribute
    if (this.state.countdowns.find(c => c.name === name)) {
        errMsg.innerHTML = "Unique name required";
        errMsg.style.visibility = "visible";
      return -1;
    }
    this.setState(prevState => {
      const countdowns = [
        ...prevState.countdowns,
        newCountdown
      ];
      // make new state with sorted countdowns
      const newState = {
        countdowns: sortCountdown(countdowns)
      };
      errMsg.style.visibility = "hidden";
      // store countdowns in local storage
      localStorage.countdowns = JSON.stringify(newState.countdowns);

      return newState;
    });
    return 0;
  }

  removeCountdown = id => {
    this.setState(prevState => {
      const newState = {
        countdowns: prevState.countdowns.filter(c => c.name !== id)
      };
      // store countdowns in local storage
      localStorage.countdowns = JSON.stringify(newState.countdowns);

      return newState;
    });
  }

  render() {
    return (
      <Container className="bg-info">
        <MainBar addCountdown={this.addCountdown} />
        <Row>
          <Col>{            
            this.state.countdowns.map(c => 
             <Countdown count={c}
               key={c.name} 
               remove={this.removeCountdown}
             />
            )
          }
          </Col>
        </Row>
      </Container>
    );
  }
}
