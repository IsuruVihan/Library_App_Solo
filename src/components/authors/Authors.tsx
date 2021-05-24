import React, {FC, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../../assets/styles/partials/_Authors.scss';
import AuthorListItem from "./AuthorListItem";
import {IAuthor} from "../../interfaces/IAuthor";
import {Plus} from "react-feather";
import CreateAuthorForm from "./create-author-form/CreateAuthorForm";
import NoAuthors from "./NoAuthors";

const Authors: FC = () => {
    // Author list
    const [authorList, setAuthorList] = useState<IAuthor[]>([]);

    // Create author form
    const [createAuthorFormVisible, setCreateAuthorFormVisible] = useState<boolean>(false);

    // Add author button
    const handleOnClickAddAuthor = () => setCreateAuthorFormVisible(true);
    const handleOnClickCloseAddAuthor = () => setCreateAuthorFormVisible(false);

    // Create button
    const handleOnClickCreate = (event: React.FormEvent, newAuthorName: string) => {
        event.preventDefault();
        let authorListCopy: IAuthor[] = authorList.slice();
        authorListCopy.push({name: newAuthorName, id: authorList.length+1});
        setAuthorList(authorListCopy);
        setCreateAuthorFormVisible(false);
    }

    return (
        <Container className="px-md-4 px-sm-5 px-xs-5">
            <Row>
                <Col xs={12} className="text-xs-left authors-title px-0 pb-1">
                    Authors
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="px-0 pt-4">
                    {authorList.length > 0 && authorList.map(
                        (Author: IAuthor) => {
                            return (
                                <AuthorListItem name={Author.name} id={Author.id} key={Author.id}/>
                            );
                        }
                    )}
                    {authorList.length === 0 && <NoAuthors />}
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="px-0">
                    <Plus className="plus-icon mb-1 ml-0"/>
                    <span className="px-0 add-author-text" onClick={handleOnClickAddAuthor}>
                        Add Author
                    </span>
                </Col>
            </Row>
            <Row>
                {
                    createAuthorFormVisible &&
                    <CreateAuthorForm
                        closeForm={handleOnClickCloseAddAuthor}
                        addAuthor={handleOnClickCreate}
                    />
                }
                <Col className="mt-3"/>
            </Row>
        </Container>
    );
}

export default Authors;