import React, {FC} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import "../../assets/styles/partials/_ContactUs.scss";

const ContactUsForm: FC = () => {
  return (
    <Row className="m-5">
      <Col xs={12}>
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label className="label">Email</Form.Label>
              <Form.Control className="input" type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="label">Full Name</Form.Label>
              <Form.Control className="input" type="text" placeholder="Full name"/>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label className="label">Address</Form.Label>
            <Form.Control className="input" placeholder="Address"/>
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Address 2</Form.Label>
            <Form.Control className="input" placeholder="Address 2"/>
          </Form.Group>
          <Form.Row>
            <Form.Group>
              <Form.Label className="label">City</Form.Label>
              <Form.Control className="input"/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="label">State</Form.Label>
              <Form.Control className="input" as="select" defaultValue="Choose...">
                <option value="sl">Sri Lanka</option>
                <option value="in">India</option>
                <option value="aus">Australia</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="label">Zip</Form.Label>
              <Form.Control className="input"/>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check type="checkbox" label="Subscribe for the daily updates"/>
          </Form.Group>
          <Button className="submit-btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactUsForm;