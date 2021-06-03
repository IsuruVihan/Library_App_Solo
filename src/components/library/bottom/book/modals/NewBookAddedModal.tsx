import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';
import {IBook} from "../../../../../interfaces/IBook";

type NewBookAddedModalProps = {
    isVisible: boolean,
    closeModal: () => void,
    newlyAddedBookDetails: IBook
};

const NewBookAddedModal: FC<NewBookAddedModalProps> = (props) => {
    const { isVisible, closeModal, newlyAddedBookDetails } = props;

    return (
        <Modal show={isVisible} onHide={closeModal}>
            <Modal.Body className="text-center new-book-added-modal">
                New Book added!
                <br /><br />
                <b>Title:</b> {newlyAddedBookDetails.name} <br />
                <b>Price:</b> {newlyAddedBookDetails.price} <br />
                <b>Author:</b> {newlyAddedBookDetails.author} <br />
            </Modal.Body>
        </Modal>
    );
}

export default NewBookAddedModal;