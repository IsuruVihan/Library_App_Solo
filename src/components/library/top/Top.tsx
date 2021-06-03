import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import LibraryImage from "../../../assets/images/Library.jpg";

const Top: FC = () => {
  return (
    <Row>
      <Col className="text-center py-2 title" xl={12}>
        My Library
      </Col>
      <Col className="px-0" xl={12}>
        <img className="image" src={LibraryImage} alt="My Library"/>
      </Col>
    </Row>
  );
}

export default Top;