import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type BookUpdatedModalProps = {
    isVisible: boolean,
    closeModal: () => void,
    previousBookName: string,
    newBookName: string,
    previousBookPrice: string,
    newBookPrice: string,
    previousBookAuthor: string,
    newBookAuthor: string
};

const BookUpdatedModal: FC<BookUpdatedModalProps> = (props) => {
    const {
        isVisible,
        closeModal,
        previousBookName,
        newBookName,
        previousBookPrice,
        newBookPrice,
        previousBookAuthor,
        newBookAuthor
    } = props;

    return (
        <Modal show={isVisible} onHide={closeModal}>
            <Modal.Body className="text-center book-updated-modal">
                Book title <b>{previousBookName}</b> updated as <b>{newBookName}</b>. <br />
                Book price <b>{previousBookPrice}</b> updated as <b>{newBookPrice}</b>. <br />
                Book author <b>{previousBookAuthor}</b> updated as <b>{newBookAuthor}</b>. <br />
            </Modal.Body>
        </Modal>
    );
}

export default BookUpdatedModal;