import React, {FC} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../assets/styles/partials/_Library.scss';

const Library: FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="text-center py-2 title">
                    My Library
                </Col>
            </Row>
        </Container>
    );
}

export default Library;