import React, {FC, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../assets/styles/partials/_Library.scss';
import Authors from "../components/library/bottom/authors/Authors";
import Books from "../components/library/bottom/book/Books";
import {IAuthor} from "../interfaces/IAuthor";
import {IAuthorDropDownItem} from "../interfaces/IAuthorDropDownItem";
import Top from "../components/library/top/Top";
import Credits from "../components/library/top/Credits";

const Library: FC = () => {
    // Author dropdown list
    const [authorDropDownList, setAuthorDropDownList] = useState<IAuthorDropDownItem[]>([]);

    // Get author list from Authors.tsx
    const getAuthorList = (authorList: IAuthor[]) => {
        let tempAuthorDropDownList: IAuthorDropDownItem[] = [];
        authorList.map((Author: IAuthor) => {
            tempAuthorDropDownList.push({value: Author.name, label: Author.name});
        });
        setAuthorDropDownList(tempAuthorDropDownList);
    };

    // Send author list to Books.tsx
    const sendAuthorList = (): IAuthorDropDownItem[] => authorDropDownList;

    return (
        <Container fluid={true} className="main">
            <Top />
            <Credits />
            <Row className="mb-5 pb-5">
                <Col md={{order: 'first', span: 6}} xs={{order: 'last', span: 12}}>
                    <Books setAuthors={sendAuthorList} />
                </Col>
                <Col className="" md={6} xs={12}>
                    <Authors getAuthors={getAuthorList} />
                </Col>
            </Row>
        </Container>
    );
}

export default Library;