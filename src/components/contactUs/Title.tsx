import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";

const Title: FC = () => {
    return (
        <Row className="mx-0">
            <Col className="text-center py-2 title" xs={12}>
                Contact Us
            </Col>
        </Row>
    );
}

export default Title;