import React, {FC} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const ContactUsForm: FC = () => {
  return (
    <Row className="mx-0">
      <Col xs={12} className="p-5">
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Full name"/>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Address"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Address 2"/>
          </Form.Group>
          <Form.Row>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option value="sl">Sri Lanka</option>
                <option value="in">India</option>
                <option value="aus">Australia</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Zip</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check type="checkbox" label="Subscribe for the daily updates"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactUsForm;