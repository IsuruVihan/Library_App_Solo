import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type AuthorUpdatedModalProps = {
  isVisible: boolean,
  closeModal: () => void,
  previousAuthorName: string,
  newAuthorName: string
};

const AuthorUpdatedModal: FC<AuthorUpdatedModalProps> = (props) => {
  const {isVisible, closeModal, previousAuthorName, newAuthorName} = props;

  return (
    <Modal show={isVisible} onHide={closeModal}>
      <Modal.Body className="text-center author-updated-modal">
        Author <b>{previousAuthorName}</b> updated as <b>{newAuthorName}</b>.
      </Modal.Body>
    </Modal>
  );
}

export default AuthorUpdatedModal;