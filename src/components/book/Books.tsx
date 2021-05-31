import React, {FC, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../../assets/styles/partials/_Authors.scss';
import {Plus} from "react-feather";
import {IBook} from "../../interfaces/IBook";
import NoBooks from "./list/NoBooks";
import BookListItem from "./list/BookListItem";
import CreateBookForm from "./form/CreateBookForm";
import {IAuthorDropDownItem} from "../../interfaces/IAuthorDropDownItem";

type BooksProps = {
    setAuthors: () => IAuthorDropDownItem[]
};

const Books: FC<BooksProps> = (props) => {
    // Book list
    let bookId: number = 1;
    const [bookList, setBookList] = useState<IBook[]>([
        {name: "Book1", price: "100", author: "Author1"},
        {name: "Book2", price: "200", author: "Author2"},
        {name: "Book3", price: "300", author: "Author3"}
    ]);

    // Create book form
    const [createBookFormVisible, setCreateBookFormVisible] = useState<boolean>(false);

    // Close button (Create book form)
    const handleOnClickCloseAddBook = () => setCreateBookFormVisible(false);

    // Add book button
    const handleOnClickAddBook = () => {
        setCreateBookFormVisible(true);
    }

    // Send author list to Create book form
    const sendAuthorList = (): IAuthorDropDownItem[] => props.setAuthors();

    return (
        <Container className="px-md-4 px-sm-5 px-xs-5">
            <Row>
                <Col xs={12} className="text-xs-left authors-title px-0 pb-1">
                    Books
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="px-0 pt-4">
                    {bookList.length > 0 && bookList.map(
                        (Book: IBook) => {
                            return (
                                <BookListItem
                                    name={Book.name}
                                    price={Book.price}
                                    author={Book.author}
                                    id={bookId}
                                    key={bookId++}
                                />
                            );
                        }
                    )}
                    {bookList.length === 0 && <NoBooks/>}
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="mt-2 px-0">
                    <Plus className="plus-icon mb-1 ml-0"/>
                    <span className="px-0 add-author-text" onClick={handleOnClickAddBook}>
                        Add Book
                    </span>
                </Col>
            </Row>
            <Row>
                {
                    createBookFormVisible &&
                    <CreateBookForm
                        closeForm={handleOnClickCloseAddBook}
                        sendAuthorList={sendAuthorList}
                        // addAuthor={handleOnClickCreate}
                    />
                }
                <Col className="mt-3"/>
            </Row>
        </Container>
    );
}

export default Books;