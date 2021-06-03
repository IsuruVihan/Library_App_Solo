import React, {FC} from 'react';
import {Carousel, Col} from "react-bootstrap";
import Lib1 from "../../../assets/images/lib-1.jpg";
import Lib2 from "../../../assets/images/lib-2.jpg";
import Lib3 from "../../../assets/images/lib-3.jpg";
import Lib4 from "../../../assets/images/lib-4.jpg";
import Lib5 from "../../../assets/images/lib-5.jpg";

const CarouselComponent: FC = () => {
  return (
    <Col className="px-0" xl={12}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Lib1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Lib2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Lib3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Lib4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Lib5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}

export default CarouselComponent;