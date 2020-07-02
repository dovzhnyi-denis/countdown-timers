import React from "react";
import {Row, Col} from "react-bootstrap";
import {mapNumber} from "../svg_arc";
import SVGCircle from "./svg_circle";

export default class Countdown extends React.Component {
  state = {
    name: "",
    endDate: 0,
    timeLeft: 0
  };

  componentDidMount() {
    this.setState(() => ({
      name: this.props.count.name,
      endDate: this.props.count.endDate
    }));

    this.updateIntervalId = setInterval(() => this.updateCount(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.updateIntervalId);
  }

  updateCount() {
    const { endDate } = this.state;
    // calculate time left to endDate
    let timeLeft = endDate - new Date().getTime();
    // update state as long as time left is greater than 0,
    // otherwise remove countdown
    if (timeLeft > 0) {
      this.setState(prevState => ({
        timeLeft: timeLeft 
      }));
    } else this.props.remove(this.state.name);
  }

  millisecToDate = timeLeft => {
    let tLeft = timeLeft;
    this.years = Math.floor(tLeft / 31104000000);
    tLeft -= this.years * 31104000000;
    this.months = Math.floor(tLeft / 2592000000);
    tLeft -= this.months * 2592000000;
    this.days = Math.floor(tLeft / 86400000);
    tLeft -= this.days * 86400000;
    this.hours = Math.floor(tLeft / 3600000);
    tLeft -= this.hours * 3600000;
    this.min = Math.floor(tLeft / 60000);
    tLeft -= this.min * 60000;
    this.sec = Math.floor(tLeft / 1000);
  }

  render() {
  const { name, timeLeft} = this.state;
  this.millisecToDate(timeLeft);
  // Mapping the date values to radius values
  const monthsRadius = mapNumber(this.months, 12, 0, 0, 360);
  const daysRadius = mapNumber(this.days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(this.hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(this.min, 60, 0, 0, 360);
  const secondsRadius = mapNumber(this.sec, 60, 0, 0, 360);

    return (
      <Row className="d-flex justify-content-center">
        <Col xs={4} className="d-flex align-items-center 
          justify-content-center name"
        >
          <p>{name}</p>
        </Col>
        <Col className="countdown-item">
          <p>{this.years}</p>
          <span>YEARS</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={monthsRadius} />
          <p>{this.months}</p>
          <span>MONTHS</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={daysRadius} />
          <p>{this.days}</p>
          <span>DAYS</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={hoursRadius} />
          <p>{this.hours}</p>
          <span>HOURS</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={minutesRadius} />
          <p>{this.min}</p>
          <span>MINUTES</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={secondsRadius} />
          <p>{this.sec}</p>
          <span>SECONDS</span>
        </Col>
        <Col xs={1}>
          <button 
            type="button" 
            className="close ml-3" 
            aria-label="Close"
            onClick={() => this.props.remove(name)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Col>
      </Row>
    );
  }
}
