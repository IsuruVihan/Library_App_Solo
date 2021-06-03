import React, {FC} from 'react';
import {Modal, Button} from 'react-bootstrap';

type ConfirmDeleteBookModalProps = {
    isVisible: boolean,
    close: () => void,
    confirmDelete: () => void,
    nameOfBookToBeDeleted: string
};

const ConfirmDeleteBookModal: FC<ConfirmDeleteBookModalProps> = (props) => {
    const {isVisible, close, confirmDelete, nameOfBookToBeDeleted} = props;

    return (
        <Modal
            show={isVisible}
            onHide={close}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Confirm delete book action</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure that you want to delete <b>{nameOfBookToBeDeleted}</b> from the system? Once you delete,
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

export default ConfirmDeleteBookModal;