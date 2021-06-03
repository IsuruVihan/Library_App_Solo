import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type NoAuthorsAvailableModalProps = {
  isVisible: boolean,
  closeModal: () => void
};

const NoAuthorsAvailableModal: FC<NoAuthorsAvailableModalProps> = (props) => {
  const {isVisible, closeModal} = props;

  return (
    <Modal show={isVisible} onHide={closeModal}>
      <Modal.Body className="text-center create-in-progress-modal">
        There should be at-least one Author to Create a Book.
      </Modal.Body>
    </Modal>
  );
}

export default NoAuthorsAvailableModal;