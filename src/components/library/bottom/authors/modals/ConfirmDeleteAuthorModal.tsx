import React, {FC} from 'react';
import {Modal, Button} from 'react-bootstrap';

type ConfirmDeleteAuthorModalProps = {
    isVisible: boolean,
    close: () => void,
    confirmDelete: () => void,
    nameOfAuthorToBeDeleted: string
};

const ConfirmDeleteAuthorModal: FC<ConfirmDeleteAuthorModalProps> = (props) => {
    const {isVisible, close, confirmDelete, nameOfAuthorToBeDeleted} = props;

    return (
        <Modal
            show={isVisible}
            onHide={close}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Confirm delete author action</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure that you want to delete <b>{nameOfAuthorToBeDeleted}</b> from the system? Once you delete,
                you can't go back
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => close()}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => confirmDelete()}>
                    Yes, Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmDeleteAuthorModal;