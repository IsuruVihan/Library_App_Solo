import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import Books from "./book/Books";
import Authors from "./authors/Authors";
import {IAuthor} from "../../../interfaces/IAuthor";
import {IAuthorDropDownItem} from "../../../interfaces/IAuthorDropDownItem";

type BottomProps = {
    getAuthorList: (authorList: IAuthor[]) => void,
    sendAuthorList: () => IAuthorDropDownItem[]
};

const Bottom: FC<BottomProps> = (props) => {
    const {getAuthorList, sendAuthorList} = props;

    return (
        <Row className="mb-5 pb-5">
            <Col md={{order: 'first', span: 6}} xs={{order: 'last', span: 12}}>
                <Books setAuthors={sendAuthorList} />
            </Col>
            <Col className="" md={6} xs={12}>
                <Authors getAuthors={getAuthorList} />
            </Col>
        </Row>
    );
}

export default Bottom;