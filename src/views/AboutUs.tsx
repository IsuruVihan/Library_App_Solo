import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import '../assets/styles/partials/_AboutUs.scss';
import Top from "../components/aboutUs/top/Top";
import Content from "../components/aboutUs/bottom/Content";

const AboutUs: FC = () => {
  return (
    <Container fluid={true} className="main">
      <Top/>
      <Content/>
    </Container>
  );
}

export default AboutUs;