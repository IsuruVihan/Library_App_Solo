import React, {FC, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../assets/styles/partials/_Library.scss';
import LibraryImage from '../assets/images/Library.jpg';
import Authors from "../components/library/authors/Authors";
import Books from "../components/library/book/Books";
import {IAuthor} from "../interfaces/IAuthor";
import {IAuthorDropDownItem} from "../interfaces/IAuthorDropDownItem";

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