import React, {FC, useState} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import '../../assets/styles/partials/_Authors.scss';
import AuthorListItem from "./AuthorListItem";
import {IAuthor} from "../../interfaces/IAuthor";
import {Plus, XCircle} from "react-feather";

const Authors: FC = () => {
    // Author list
    const [authorList, setAuthorList] = useState<IAuthor[]>([
        {name: "Author1", id: 1},
        {name: "Author2", id: 2},
        {name: "Author3", id: 3}
    ]);

    return (
        <Container className="px-4">
            <Row style={{border: '1px solid red'}}>
                <Col xs={12} className="text-xs-left authors-title px-0 pb-1">
                    Authors
                </Col>
            </Row>
            <Row style={{border: '1px solid red'}}>
                <Col xs={12} className="px-0 pt-4">
                    {authorList.map(
                        (Author: IAuthor) => {
                            return (
                                <AuthorListItem name={Author.name} id={Author.id} key={Author.id}/>
                            );
                        }
                    )}
                </Col>
            </Row>
            <Row style={{border: '1px solid red'}} className="mt-3 mb-4">
                <Col xs={12} className="px-0">
                    <Plus className="plus-icon mb-1 ml-0" /> <span className="px-0 add-author-text">Add Author</span>
                </Col>
            </Row>
            <Row style={{border: '2px solid red'}}>

                <Col style={{border: '2px solid blue'}} md={9} sm={12} xs={12} className="px-0 mt-3">
                    <Row className="mx-0" style={{border: '2px solid orange'}}>
                        <Col className="px-0 py-1 create-author-title" xs={9} style={{border: '2px solid green'}}>
                            <u>Create Author</u>
                        </Col>
                        <Col className="pr-2 pt-xl-2 pt-lg-2 pt-md-1 pt-sm-2 pt-xs-3 text-right" style={{border: '2px solid green'}}>
                            <XCircle className="close-btn" />
                        </Col>
                    </Row>
                    <Row className="mx-0" style={{border: '2px solid orange'}}>
                        <Col xs={1} style={{border: '2px solid green'}}>

                        </Col>
                        <Col style={{border: '2px solid green'}} className="px-0">
                            <Form>
                                <Row className="mx-0 pr-2" style={{border: '2px solid magenta'}}>
                                    <Col className="pl-1 pb-0 text-left" xs={12} style={{border: '2px solid black'}}>
                                        <Form.Label className="author-label mb-0">
                                            Name of Author
                                        </Form.Label>
                                    </Col>
                                    <Col className="px-0" xs={12} style={{border: '2px solid black'}}>
                                        <Form.Control  className="author-input" type="text" />
                                    </Col>
                                    <Col className="px-0 pt-4 text-right" xs={12} style={{border: '2px solid black'}}>
                                        <Button  className="submit-btn py-1" size="sm" type="submit">
                                            Create
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>


                <Col style={{border: '2px solid blue'}} className="mt-3">

                </Col>
            </Row>
        </Container>
    );
}

export default Authors;