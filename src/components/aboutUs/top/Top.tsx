import React, {FC} from 'react';
import {Row} from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import Title from "./Title";

const Top: FC = () => {
    return (
        <Row>
            <Title />
            <CarouselComponent />
        </Row>
    );
}

export default Top;