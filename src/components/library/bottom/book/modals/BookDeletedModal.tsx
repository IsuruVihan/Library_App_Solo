import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type BookDeletedModalProps = {
  isVisible: boolean,
  closeModal: () => void,
  deletedBookName: string
};

const BookDeletedModal: FC<BookDeletedModalProps> = (props) => {
  const {isVisible, closeModal, deletedBookName} = props;

  return (
    <Modal show={isVisible} onHide={closeModal}>
      <Modal.Body className="text-center book-deleted-modal">
        Book <b>{deletedBookName}</b> deleted!
      </Modal.Body>
    </Modal>
  );
}

export default BookDeletedModal;