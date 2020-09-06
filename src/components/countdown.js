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
    // otherwise set background to red (#e25a5c)
    if (timeLeft > 0) {
      this.setState(prevState => ({
        timeLeft: timeLeft 
      }));

    } else {
      this.setState(prevState => ({
        timeLeft: 0
      }));
      this.countdownRow.style.backgroundColor = "#e25a5c";
    }
  }

// check if "year" is a leap year
  checkLeapYear(year) {
  // each month days in milliseconds
  const monthDaysMS = [2678400000, 2419200000, 2678400000, 2592000000, 2678400000, 2592000000, 2678400000, 2678400000, 2592000000, 2678400000, 2592000000, 2678400000];
    
  if (!(year % 400)) {
    // add one day to february
    monthDaysMS[1] += monthDaysMS[1] / 28;
    return monthDaysMS;
  } else if (!(year % 100)) {
    return monthDaysMS;
  } else if (!(year % 4)) {
    //add one day to february
    monthDaysMS[1] += monthDaysMS[1] / 28;
    return monthDaysMS;
  }
  return monthDaysMS;
}

  yearsMonths(tLeft, endDate, curDate)  {
    const endYear = endDate.getFullYear(); 
    let curYear = curDate.getFullYear(),
      curMonth = curDate.getMonth(),
      month = 0;
    
    for (;curYear <= endYear; ++curYear) {
      // array of curent year months days in milliseconds
      const monthDaysMS = this.checkLeapYear(curYear);
      let lastMonth = 12;
      
      if (curYear === endYear) lastMonth = endDate.getMonth();
      for (;curMonth < lastMonth && tLeft.ms > monthDaysMS[curMonth]; ++curMonth) { 
        tLeft.ms -= monthDaysMS[curMonth];
        ++month;
      }
      curMonth = 0;
    }

    tLeft.years = Math.floor(month / 12);
    month -= tLeft.years * 12;
    tLeft.months = month;
  }

  days(tLeft, CYMDays, EYMDays, curDate, endDate, dayMS) {
    let days = 0,
      cMonthDays = CYMDays[curDate.getMonth()] / dayMS,
      eMonthDays = EYMDays[endDate.getMonth()] / dayMS;
  
    for (let q = curDate.getDate(); q < cMonthDays && tLeft.ms > dayMS;
      ++q) {
      ++days;
      tLeft.ms -= dayMS;
    }
  
    for (let q = 1; q < eMonthDays && tLeft.ms > dayMS; ++q) {
      ++days;
      tLeft.ms -= dayMS;
    }
  
    tLeft.days = days;
  }

  millisecToDate = ms => {
  const tLeft = {ms},
    endDate = new Date(tLeft.ms + new Date().getTime()),
    curDate = new Date(),
    // one minute in milliseconds
    minMS = 60000,
    // one hour in milliseconds
    hourMS = minMS * 60,
    // one day in milliseconds
    dayMS = hourMS * 24;
  // array of current year's month days in milliseconds
  const CYMDays = this.checkLeapYear(curDate.getFullYear());
  // array of end year's month days in milliseconds
  const EYMDays = this.checkLeapYear(endDate.getFullYear());

  this.yearsMonths(tLeft, endDate, curDate);

  this.days(tLeft, CYMDays, EYMDays, curDate, endDate, dayMS);

  tLeft.hours = Math.floor(tLeft.ms / hourMS);
  tLeft.ms -= tLeft.hours * hourMS;

  tLeft.min = Math.floor(tLeft.ms / minMS);
  tLeft.ms -= tLeft.min * minMS;

  tLeft.sec = Math.floor(tLeft.ms / 1000);

  return tLeft;
}

  render() {
  const { name, timeLeft} = this.state;
  const tLeft = this.millisecToDate(timeLeft);
  // Mapping the date values to radius values
  const monthsRadius = mapNumber(this.months, 12, 0, 0, 360);
  const daysRadius = mapNumber(this.days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(this.hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(this.min, 60, 0, 0, 360);
  const secondsRadius = mapNumber(this.sec, 60, 0, 0, 360);

    return (
      <Row className="d-flex justify-content-center"
        ref={row => this.countdownRow = row}
      >
        <Col xs={4} className="d-flex align-items-center 
          justify-content-center name"
        >
          <p>{name}</p>
        </Col>
        <Col className="countdown-item">
          <p>{tLeft.years}</p>
          <span>YEARS</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={monthsRadius} />
          <p>{tLeft.months}</p>
          <span>MONTHS</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={daysRadius} />
          <p>{tLeft.days}</p>
          <span>DAYS</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={hoursRadius} />
          <p>{tLeft.hours}</p>
          <span>HOURS</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={minutesRadius} />
          <p>{tLeft.min}</p>
          <span>MINUTES</span>
        </Col>
        <Col className="countdown-item">
          <SVGCircle radius={secondsRadius} />
          <p>{tLeft.sec}</p>
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
