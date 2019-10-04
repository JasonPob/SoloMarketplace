import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

class FilterModal2 extends Component {
    state = {
        type: [
            { id: 1, value: "Use Type" },
            { id: 2, value: "Application" },
            { id: 3, value: "Mounting Location" },
            { id: 4, value: "Accessories" },
            { id: 5, value: "Model year" }],
        useType: [
            { id: 1, value: "Commercial" },
            { id: 2, value: "Industrial" },
            { id: 3, value: "Residential" }],
        application: [
            { id: 1, value: "Indoor" },
            { id: 2, value: "Outdoor" }],
        mountingLocation: [
            { id: 1, value: "Roof" },
            { id: 2, value: "Wall" },
            { id: 3, value: "Free standing" }],
        accessories: [
            { id: 1, value: "With light" },
            { id: 2, value: "Without light" }],
        technicalDetails: [
            { id: 1, value: "Airflow (CFM)" },
            { id: 2, value: "Max power (W)" },
            { id: 3, value: "Sound at max speed (dBA)" },
            { id: 4, value: "Fan sweep diameter (in)" },
            { id: 5, value: "Height (in)" }],
        brand: [
            { id: 1, value: "Selected Brand(s)" }],
        other: [
            { id: 1, value: "With the words" }]
    }
    render() {
        return (
            <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Radios
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
        );
    }
}

export default FilterModal2;