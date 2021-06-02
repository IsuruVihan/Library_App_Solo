import React, {FC} from 'react';
import {Container, Row, Col, Carousel} from "react-bootstrap";
import '../assets/styles/partials/_AboutUs.scss';
import Lib1 from '../assets/images/lib-1.jpg';
import Lib2 from '../assets/images/lib-2.jpg';
import Lib3 from '../assets/images/lib-3.jpg';
import Lib4 from '../assets/images/lib-4.jpg';
import Lib5 from '../assets/images/lib-5.jpg';
import {BookOpen} from "react-feather";

const AboutUs: FC = () => {
    return (
        <Container fluid={true} className="main">
            <Row>
                <Col className="text-center py-2 title" xl={12}>
                    About Us
                </Col>
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
            </Row>
            <Row className="mx-0">
                <Col md={6} xs={12} className="px-5 pt-5 text-justify content">
                    Major progress has been made towards increasing primary school enrolment rates. Still, 617 million
                    children and adolescents worldwide are unable to read, despite the fact that most of them have
                    attended school for several years. One reason for this, is that many do not have access to quality,
                    early grade reading resources in a language they understand.
                    <br /><br />
                    The goal of the MyLibrary Alliance is therefore to provide access to free, high-quality,
                    early grade reading resources in languages that children use and understand. As a flagship activity
                    within the Global Book Alliance, the MyLibrary has been developed to increase the
                    availability of high-quality reading resources in underserved languages worldwide. “Underserved
                    languages” refer to languages where there is currently a lack of quality early grade reading
                    resources. “Reading resources” refer primarily to reading instruction books and storybooks for
                    leisure reading, but the MyLibrary will also link to more interactive resources, such as literacy
                    games.
                </Col>
                <Col md={6} xs={12} className="px-5 py-5 text-justify content">
                    <BookOpen className="mr-3" /><span className="content-title">WHAT IS THE PURPOSE OF THE MY-LIBRARY?</span>
                    <br /><br />
                    The MyLibrary collects existing high-quality open educational reading resources, and makes them
                    available on web, mobile and for print. The MyLibrary currently offers 6000+ books in 72 languages.
                    <br /><br />
                    <BookOpen className="mr-3" /><span className="content-title">WHO CAN USE THE MY-LIBRARY?</span>
                    <br /><br />
                    The MyLibrary is aimed at many different types of users and the platform is open for everyone.
                    Intended users include ministries of education, school managers, teachers, donor agencies and their
                    implementing partners, international and national non-governmental organizations, local publishers,
                    digital distributors, content providers and households in developing countries.
                    <br /><br />
                    <BookOpen className="mr-3" /><span className="content-title">WHO IS BEHIND THE MY-LIBRARY?</span>
                    <br /><br />
                    The MyLibrary-platform is a collaborative endeavor which requires involvement from a broad spectrum
                    of stakeholders in order to be truly successful and widely used. It is being built based on existing
                    quality learning resources provided from a variety of initiatives. The content pool will expand over
                    time through discovery and sharing of more existing quality content, translations and localizations
                    of the platform’s content, as well as additions of newly created content. The Platform is designed
                    both for direct use by a variety of user groups, and for integration with existing initiatives in
                    the field.
                    <br />
                    The MyLibrary is part of The Global Book Alliance, an international effort involving multiple
                    stakeholders working to transform book development, procurement and distribution to ensure that no
                    child is without books. The mission of the Global Book Alliance is to guarantee that children
                    everywhere have the books and learning materials they need to learn to read and read to learn.
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;