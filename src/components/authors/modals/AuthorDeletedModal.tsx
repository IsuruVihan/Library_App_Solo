import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type AuthorDeletedModalProps = {
    isVisible: boolean,
    closeModal: () => void,
    deletedAuthorName: string
};

const AuthorDeletedModal: FC<AuthorDeletedModalProps> = (props) => {
    const { isVisible, closeModal, deletedAuthorName } = props;

    return (
        <Modal show={isVisible} onHide={closeModal}>
            <Modal.Body className="text-center new-author-added-modal">
                Author <b>{deletedAuthorName}</b> deleted!
            </Modal.Body>
        </Modal>
    );
}

export default AuthorDeletedModal;