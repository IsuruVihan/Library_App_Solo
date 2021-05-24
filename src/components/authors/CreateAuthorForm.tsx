import React, {FC} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const CreateAuthorForm: FC = () => {
    return (
        <Col md={9} sm={12} xs={12} className="px-0 mt-3">
            <Row className="mx-0">
                <Col className="px-0 py-1 create-author-title" xs={9}>
                    <u>Create Author</u>
                </Col>
                <Col className="pr-2 pt-xl-2 pt-lg-2 pt-md-1 pt-sm-2 pt-xs-3 text-right">
                    <XCircle className="close-btn" />
                </Col>
            </Row>
            <Row className="mx-0">
                <Col xs={1} />
                <Col className="px-0">
                    <Form>
                        <Row className="mx-0 pr-2 pt-3">
                            <Col className="pl-1 pb-0 text-left" xs={12}>
                                <Form.Label className="author-label mb-0">
                                    Name of Author
                                </Form.Label>
                            </Col>
                            <Col className="px-0" xs={12}>
                                <Form.Control  className="author-input" type="text" />
                            </Col>
                            <Col className="px-0 pt-4 text-right" xs={12}>
                                <Button  className="submit-btn py-1" size="sm" type="submit">
                                    Create
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
}

export default CreateAuthorForm;