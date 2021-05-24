import React, {FC, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../../assets/styles/partials/_Authors.scss';
import AuthorListItem from "./AuthorListItem";
import {IAuthor} from "../../interfaces/IAuthor";
import {Plus} from "react-feather";

const Authors: FC = () => {
    // Author list
    const [authorList, setAuthorList] = useState<IAuthor[]>([
        {name: "Author1", id: 1},
        {name: "Author2", id: 2},
        {name: "Author3", id: 3}
    ]);

    return (
        <Container style={{border: '2px solid red'}} className="px-4">
            <Row style={{border: '2px solid orange'}}>
                <Col xs={12} style={{border: '2px solid black'}} className="text-xs-left authors-title px-0 pb-1">
                    Authors
                </Col>
            </Row>
            <Row style={{border: '2px solid orange'}}>
                <Col xs={12} style={{border: '2px solid black'}} className="px-0 pt-3">
                    {authorList.map(
                        (Author: IAuthor) => {
                            return (
                                <AuthorListItem name={Author.name} id={Author.id} key={Author.id}/>
                            );
                        }
                    )};
                </Col>
            </Row>
            <Row style={{border: '2px solid orange'}}>
                <Col xs={12} style={{border: '2px solid black'}} className="px-0">
                    <Plus className="plus-icon mb-1" /> <span className="px-0 add-author-text">Add Author</span>
                </Col>
            </Row>
        </Container>
    );
}

export default Authors;