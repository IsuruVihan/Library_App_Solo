import React, {FC, useState} from 'react';
import {Container} from "react-bootstrap";
import '../assets/styles/partials/_Library.scss';
import {IAuthor} from "../interfaces/IAuthor";
import {IAuthorDropDownItem} from "../interfaces/IAuthorDropDownItem";
import Top from "../components/library/top/Top";
import Credits from "../components/library/top/Credits";
import Bottom from "../components/library/bottom/Bottom";

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
            <Bottom getAuthorList={getAuthorList} sendAuthorList={sendAuthorList} />
        </Container>
    );
}

export default Library;