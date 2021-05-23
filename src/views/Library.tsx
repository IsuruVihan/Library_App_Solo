import React, {FC} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../assets/styles/partials/_Library.scss';
import LibraryImage from '../assets/images/Library.jpg';

const Library: FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="text-center py-2 title" xl={12}>
                    My Library
                </Col>
                <Col className="px-0" xl={12}>
                    <img className="image" src={LibraryImage} alt="My Library" />
                </Col>
            </Row>
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
            <Row>
                <Col style={{border: '1px solid red'}} md={6} xs={{order: 12}}>
                    Books
                </Col>
                <Col style={{border: '1px solid black'}} md={6} xs={{order: 12}}>
                    Authors
                </Col>
            </Row>
        </Container>
    );
}

export default Library;