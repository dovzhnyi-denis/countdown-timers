import React from "react";
import { Row,
  Col,
  Form,
  Button
  } from "react-bootstrap";

export default function MainBar({addCountdown}) {
  const refs = {};

  const addCd = e => {
    e.preventDefault();
    if (!addCountdown(refs)) e.currentTarget.reset();
  };

  return ( 
    <Row className="bg-primary main-bar main-bar-h sticky-top">
      <Col md={3} lg={4} className="d-flex flex-row align-items-center
        justify-content-center
        ">
        <h3>Countdown Timers.</h3>
      </Col>
      <Col className="d-flex flex-row justify-content-end align-items-center">
        <p className="text-danger invalid-name" 
          style={{visibility: "hidden"}}
          ref={p => refs.errMsg = p}
        >Unique name required</p>
      </Col>
      <Form onSubmit={addCd} className="d-flex flex-row align-items-center">
        <Form.Row>
          <Col xs={5}>
            <Form.Control type="text"
              ref={input => refs.inputName = input}
              placeholder="Enter countdown's name"
              required
            />
          </Col>
          <Col xs={3}>
            <input type="date"
              aria-label="input date"
              ref={input => refs.inputDate = input}
              required
            />
          </Col>
          <Col>
            <Button variant="secondary" type="submit" value="">Add Countdown</Button>
          </Col>
        </Form.Row>
      </Form>
    </Row>
  );
}
