import React, {FC, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../assets/styles/partials/_Books.scss';
import {IAuthor} from "../../interfaces/IAuthor";
import {Plus} from "react-feather";
import NoBooks from "./list/NoBooks";
import BookListItem from "./list/BookListItem";

type BooksProps = {
    availableAuthors: () => IAuthor[]
};

const Books: FC<BooksProps> = (props) => {
    const { availableAuthors } = props;

    // Author list (with respective books)
    const [authorList, setAuthorList] = useState<IAuthor[]>([]);
    useEffect(() => {
        setAuthorList(availableAuthors);
    }, [availableAuthors]);

    // Book count
    const [numOfBooks, setNumOfBooks] = useState<number>(0);

    return (
        <Container className="px-md-4 px-sm-5 px-xs-5">
            {/*<NewAuthorAddedModal*/}
            {/*    isVisible={isVisibleNewAuthorAddedModal}*/}
            {/*    closeModal={handleCloseNewAuthorAddedModal}*/}
            {/*    newlyAddedAuthorName={authorList.length > 0 ? authorList[authorList.length - 1].name : ""}*/}
            {/*/>*/}
            {/*<AuthorUpdatedModal*/}
            {/*    isVisible={isVisibleAuthorUpdatedModal}*/}
            {/*    closeModal={handleCloseAuthorUpdatedModal}*/}
            {/*    previousAuthorName={authorPair[0].name}*/}
            {/*    newAuthorName={authorPair[1].name}*/}
            {/*/>*/}
            {/*<AuthorDeletedModal*/}
            {/*    isVisible={isVisibleAuthorDeletedModal}*/}
            {/*    closeModal={handleCloseAuthorDeletedModal}*/}
            {/*    deletedAuthorName={removedAuthor}*/}
            {/*/>*/}
            {/*{authorToBeDeletedID !== 0 && <ConfirmDeleteAuthorModal*/}
            {/*    isVisible={isVisibleConfirmDeleteAuthorModal}*/}
            {/*    close={handleOnClickCloseConfirmDeleteAuthorModal}*/}
            {/*    confirmDelete={handleOnClickConfirmDeleteAction}*/}
            {/*    nameOfAuthorToBeDeleted={authorList[authorToBeDeletedID - 1].name}*/}
            {/*/>}*/}
            {/*<CreateInProgressModal*/}
            {/*    isVisible={isVisibleCreateInProgressModal}*/}
            {/*    closeModal={handleCloseCreateInProgressModal}*/}
            {/*/>*/}
            {/*<UpdateInProgressModal*/}
            {/*    isVisible={isVisibleUpdateInProgressModal}*/}
            {/*    closeModal={handleCloseUpdateInProgressModal}*/}
            {/*/>*/}
            <Row>
                <Col xs={12} className="text-xs-left books-title px-0 pb-1">
                    Books
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="px-0 pt-4">
                    {/*{authorList.length > 0 && authorList.map(*/}
                    {/*    (Author: IAuthor) => {*/}
                    {/*        return (*/}
                    {/*            <AuthorListItem*/}
                    {/*                name={Author.name}*/}
                    {/*                id={authorId}*/}
                    {/*                key={authorId++}*/}
                    {/*                update={handleOnClickUpdateIcon}*/}
                    {/*                delete={handleOnClickDeleteAuthor}*/}
                    {/*            />*/}
                    {/*        );*/}
                    {/*    }*/}
                    {/*)}*/}
                    {/*{authorList.length === 0 && <NoAuthors/>}*/}
                    <BookListItem name={"Book 1"} id={1} />
                    <BookListItem name={"Book 2"} id={2} />
                    <BookListItem name={"Book 3"} id={3} />
                    {(authorList.length === 0 || numOfBooks === 0) && <NoBooks />}
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="mt-2 px-0">
                    <Plus className="plus-icon mb-1 ml-0"/>
                    {/*<span className="px-0 add-author-text" onClick={handleOnClickAddAuthor}>*/}
                    {/*    Add Author*/}
                    {/*</span>*/}
                    <span className="px-0 add-book-text">
                        Add Book
                    </span>
                </Col>
            </Row>
            <Row>
                {/*{*/}
                {/*    createAuthorFormVisible &&*/}
                {/*    <CreateAuthorForm*/}
                {/*        closeForm={handleOnClickCloseAddAuthor}*/}
                {/*        addAuthor={handleOnClickCreate}*/}
                {/*    />*/}
                {/*}*/}
                {/*{*/}
                {/*    isVisibleUpdateAuthorForm &&*/}
                {/*    <UpdateAuthorForm*/}
                {/*        closeForm={handleOnClickCloseUpdateAuthorForm}*/}
                {/*        updateAuthor={handleOnSubmitUpdateForm}*/}
                {/*        currentEnteredAuthorName={authorList[authorWillUpdateID-1].name}*/}
                {/*    />*/}
                {/*}*/}
                <Col className="mt-3"/>
            </Row>
        </Container>
    );
}

export default Books;