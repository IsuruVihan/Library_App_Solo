import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";

const Credits: FC = () => {
  return (
    <Row>
      <Col
        className="image-credits px-xl-4 px-sm-0 py-1"
        sm={{offset: 9}}
        xs={{offset: 8}}
      >
        Photo by
        <a
          href="https://unsplash.com/@annahunko?
                        utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank" rel="noreferrer"
        >
          Anna Hunko
        </a>
        on
        <a
          href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank" rel="noreferrer"
        >
          Unsplash
        </a>
      </Col>
    </Row>
  );
}

export default Credits;