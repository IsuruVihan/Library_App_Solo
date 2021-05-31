import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type BookDeletedModalProps = {
    isVisible: boolean,
    closeModal: () => void,
    deletedBookName: string
};

const BookDeletedModal: FC<BookDeletedModalProps> = (props) => {
    const { isVisible, closeModal, deletedBookName } = props;

    return (
        <Modal show={isVisible} onHide={closeModal}>
            <Modal.Body className="text-center author-deleted-modal">
                Author <b>{deletedBookName}</b> deleted!
            </Modal.Body>
        </Modal>
    );
}

export default BookDeletedModal;