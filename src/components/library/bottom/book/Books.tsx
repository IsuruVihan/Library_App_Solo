import React, {FC, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../../../../assets/styles/partials/_Books.scss';
import {Plus} from "react-feather";
import {IBook} from "../../../../interfaces/IBook";
import NoBooks from "./list/NoBooks";
import BookListItem from "./list/BookListItem";
import CreateBookForm from "./form/CreateBookForm";
import {IAuthorDropDownItem} from "../../../../interfaces/IAuthorDropDownItem";
import CreateInProgressModal from "./modals/CreateInProgressModal";
import NewBookAddedModal from "./modals/NewBookAddedModal";
import NoAuthorsAvailableModal from './modals/NoAuthorsAvailableModal';
import BookDeletedModal from "./modals/BookDeletedModal";
import ConfirmDeleteBookModal from "./modals/ConfirmDeleteBookModal";
import BookUpdatedModal from "./modals/BookUpdatedModal";
import UpdateInProgressModal from "./modals/UpdateInProgressModal";
import UpdateBookForm from "./form/UpdateBookForm";

type BooksProps = {
  setAuthors: () => IAuthorDropDownItem[]
};

const Books: FC<BooksProps> = (props) => {
  // Book list
  let bookId: number = 1;
  const [bookList, setBookList] = useState<IBook[]>([]);

  // Old book & Updated book
  const [bookPair, setBookPair] = useState<IBook[]>([{name: "", price: "", author: ""}, {
    name: "",
    price: "",
    author: ""
  }]);

  // NewBookAddedModal
  const [isVisibleNewBookAddedModal, setIsVisibleNewBookAddedModal] = useState<boolean>(false);
  const handleCloseNewBookAddedModal = () => setIsVisibleNewBookAddedModal(false);

  // BookUpdatedModal
  const [isVisibleBookUpdatedModal, setIsVisibleBookUpdatedModal] = useState<boolean>(false);
  const handleCloseBookUpdatedModal = () => setIsVisibleBookUpdatedModal(false);

  // NoAuthorsAvailableModal
  const [isVisibleNoAuthorsAvailableModal, setIsVisibleNoAuthorsAvailableModal] = useState<boolean>(false);
  const handleCloseNoAuthorsAvailableModal = () => setIsVisibleNoAuthorsAvailableModal(false);

  // BookDeletedModal
  const [isVisibleBookDeletedModal, setIsVisibleBookDeletedModal] = useState<boolean>(false);
  const handleCloseBookDeletedModal = () => setIsVisibleBookDeletedModal(false);
  const [removedBook, setRemovedBook] = useState<string>("");

  // ConfirmDeleteBookModal
  const [isVisibleConfirmDeleteBookModal, setIsVisibleConfirmDeleteBookModal] = useState<boolean>(false);
  const [bookToBeDeletedID, setBookToBeDeletedID] = useState<number>(0);
  const handleOnClickCloseConfirmDeleteBookModal = () => {
    setBookToBeDeletedID(0);
    setIsVisibleConfirmDeleteBookModal(false);
  }
  const handleOnClickConfirmDeleteAction = () => {
    let bookListCopy: IBook[] = bookList.slice();
    const deletedBook: string = bookListCopy[bookToBeDeletedID - 1].name;
    setRemovedBook(deletedBook);
    bookListCopy.splice(bookToBeDeletedID - 1, 1);
    setBookList(bookListCopy);
    setIsVisibleConfirmDeleteBookModal(false);
    setBookToBeDeletedID(0);
    setIsVisibleBookDeletedModal(true);
    setTimeout(
      () => {
        setIsVisibleBookDeletedModal(false);
        setRemovedBook("");
      },
      1500
    );
    setCreateBookFormVisible(false);
    setIsVisibleUpdateBookForm(false);
  }

  // UpdateInProgressModal
  const [isVisibleUpdateInProgressModal, setIsVisibleUpdateInProgressModal] = useState<boolean>(false);
  const handleCloseUpdateInProgressModal = () => setIsVisibleUpdateInProgressModal(false);

  // Create book form
  const [createBookFormVisible, setCreateBookFormVisible] = useState<boolean>(false);

  // Update book icon
  const [isVisibleUpdateBookForm, setIsVisibleUpdateBookForm] = useState<boolean>(false);
  const [bookWillUpdateID, setBookWillUpdateID] = useState<number>(0);
  const handleOnClickCloseUpdateBookForm = () => setIsVisibleUpdateBookForm(false);
  const handleOnClickUpdateIcon = (bookId: number) => {
    if (createBookFormVisible) {
      setIsVisibleCreateInProgressModal(true);
      setTimeout(
        () => setIsVisibleCreateInProgressModal(false),
        3000
      );
      return;
    } else if (isVisibleUpdateBookForm) {
      setIsVisibleUpdateInProgressModal(true);
      setTimeout(
        () => setIsVisibleUpdateInProgressModal(false),
        3000
      );
      return;
    }
    setBookWillUpdateID(bookId);
    setIsVisibleUpdateBookForm(true);
  }
  const handleOnSubmitUpdateForm = (event: React.FormEvent, newBookName: string, newBookPrice: string, newBookAuthor: IAuthorDropDownItem) => {
    event.preventDefault();
    let bookListCopy: IBook[] = bookList.slice();
    let bookToBeUpdate: IBook = bookListCopy[bookWillUpdateID - 1];
    setBookPair([
      {name: bookToBeUpdate.name, price: bookToBeUpdate.price, author: bookToBeUpdate.author},
      {name: newBookName, price: newBookPrice, author: newBookAuthor.value}
    ]);
    bookToBeUpdate.name = newBookName;
    bookToBeUpdate.price = newBookPrice;
    bookToBeUpdate.author = newBookAuthor.value;
    bookListCopy.splice(bookWillUpdateID - 1, 1, bookToBeUpdate);
    setBookList(bookListCopy);
    setBookWillUpdateID(0);
    setIsVisibleUpdateBookForm(false);
    setIsVisibleBookUpdatedModal(true);
    setTimeout(
      () => {
        setIsVisibleBookUpdatedModal(false);
        setBookPair([{name: "", price: "", author: ""}, {name: "", price: "", author: ""}]);
      }, 3000
    );
  }

  // Delete book icon
  const handleOnClickDeleteBook = (bookWillDeleteID: number) => {
    if (createBookFormVisible) {
      setIsVisibleCreateInProgressModal(true);
      setTimeout(
        () => setIsVisibleCreateInProgressModal(false),
        3000
      );
      return;
    } else if (isVisibleUpdateBookForm) {
      setIsVisibleUpdateInProgressModal(true);
      setTimeout(
        () => setIsVisibleUpdateInProgressModal(false),
        3000
      );
      return;
    }
    setBookToBeDeletedID(bookWillDeleteID);
    setIsVisibleConfirmDeleteBookModal(true);
  }

  // Close button (Create book form)
  const handleOnClickCloseAddBook = () => setCreateBookFormVisible(false);

  // Add book button
  const handleOnClickAddBook = () => {
    if (props.setAuthors().length === 0) {
      setIsVisibleNoAuthorsAvailableModal(true);
      setTimeout(
        () => setIsVisibleNoAuthorsAvailableModal(false),
        3000
      );
      return;
    }
    if (createBookFormVisible) {
      setIsVisibleCreateInProgressModal(true);
      setTimeout(
        () => setIsVisibleCreateInProgressModal(false),
        3000
      );
      return;
    } else if (isVisibleUpdateBookForm) {
      setIsVisibleUpdateInProgressModal(true);
      setTimeout(
        () => setIsVisibleUpdateInProgressModal(false),
        3000
      );
      return;
    }
    setCreateBookFormVisible(true);
  }

  // CreateInProgressModal
  const [isVisibleCreateInProgressModal, setIsVisibleCreateInProgressModal] = useState<boolean>(false);
  const handleCloseCreateInProgressModal = () => setIsVisibleCreateInProgressModal(false);

  // Send author list to Create book form
  const sendAuthorList = (): IAuthorDropDownItem[] => props.setAuthors();

  // Create button
  const handleOnClickCreate = (event: React.FormEvent,
                               bookTitle: string,
                               bookAuthor: IAuthorDropDownItem,
                               bookPrice: string
  ) => {
    event.preventDefault();
    let bookListCopy: IBook[] = bookList.slice();
    bookListCopy.push({name: bookTitle, price: bookPrice, author: bookAuthor.value});
    setBookList(bookListCopy);
    setCreateBookFormVisible(false);
    setIsVisibleNewBookAddedModal(true);
    setTimeout(
      () => setIsVisibleNewBookAddedModal(false),
      2000
    );
  }

  // Renderings
  const renderBookList = () => {
    return (
      bookList.length > 0 && bookList.map(
        (Book: IBook) => {
          return (
            <BookListItem
              name={Book.name}
              id={bookId}
              key={bookId++}
              update={handleOnClickUpdateIcon}
              delete={handleOnClickDeleteBook}
            />
          );
        }
      )
    );
  }

  return (
    <Container className="px-md-4 px-sm-5 px-xs-5">
      <NewBookAddedModal
        isVisible={isVisibleNewBookAddedModal}
        closeModal={handleCloseNewBookAddedModal}
        newlyAddedBookDetails={
          bookList.length > 0 ?
            bookList[bookList.length - 1] : {name: "", price: "", author: ""}
        }
      />
      <BookUpdatedModal
        isVisible={isVisibleBookUpdatedModal}
        closeModal={handleCloseBookUpdatedModal}
        previousBookName={bookPair[0].name}
        newBookName={bookPair[1].name}
        previousBookPrice={bookPair[0].price}
        newBookPrice={bookPair[1].price}
        previousBookAuthor={bookPair[0].author}
        newBookAuthor={bookPair[1].author}
      />
      <BookDeletedModal
        isVisible={isVisibleBookDeletedModal}
        closeModal={handleCloseBookDeletedModal}
        deletedBookName={removedBook}
      />
      {bookToBeDeletedID !== 0 && <ConfirmDeleteBookModal
          isVisible={isVisibleConfirmDeleteBookModal}
          close={handleOnClickCloseConfirmDeleteBookModal}
          confirmDelete={handleOnClickConfirmDeleteAction}
          nameOfBookToBeDeleted={bookList[bookToBeDeletedID - 1].name}
      />}
      <CreateInProgressModal
        isVisible={isVisibleCreateInProgressModal}
        closeModal={handleCloseCreateInProgressModal}
      />
      <UpdateInProgressModal
        isVisible={isVisibleUpdateInProgressModal}
        closeModal={handleCloseUpdateInProgressModal}
      />
      <NoAuthorsAvailableModal
        isVisible={isVisibleNoAuthorsAvailableModal}
        closeModal={handleCloseNoAuthorsAvailableModal}
      />
      <Row>
        <Col xs={12} className="text-xs-left books-title px-0 pb-1">
          Books
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="px-0 pt-4">
          {renderBookList()}
          {bookList.length === 0 && <NoBooks/>}
        </Col>
      </Row>
      <Row className="mt-3 mb-4">
        <Col xs={12} className="mt-2 px-0">
          <Plus className="plus-icon mb-1 ml-0"/>
          <span className="px-0 add-book-text" onClick={handleOnClickAddBook}>
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
              addBook={handleOnClickCreate}
          />
        }
        {
          isVisibleUpdateBookForm &&
          <UpdateBookForm
              closeForm={handleOnClickCloseUpdateBookForm}
              sendAuthorList={sendAuthorList}
              updateBook={handleOnSubmitUpdateForm}
              currentEnteredBookTitle={bookList[bookWillUpdateID - 1].name}
              currentEnteredBookPrice={bookList[bookWillUpdateID - 1].price}
              currentEnteredBookAuthor={{
                label: bookList[bookWillUpdateID - 1].author,
                value: bookList[bookWillUpdateID - 1].author
              }}
          />
        }
        <Col className="mt-3"/>
      </Row>
    </Container>
  );
}

export default Books;