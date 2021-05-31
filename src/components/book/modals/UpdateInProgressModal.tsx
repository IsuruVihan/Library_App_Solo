import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type UpdateInProgressModalProps = {
    isVisible: boolean,
    closeModal: () => void
};

const UpdateInProgressModal: FC<UpdateInProgressModalProps> = (props) => {
    const { isVisible, closeModal } = props;

    return (
        <Modal show={isVisible} onHide={closeModal}>
            <Modal.Body className="text-center update-in-progress-modal">
                Book update in progress. Please complete the process to continue.
            </Modal.Body>
        </Modal>
    );
}

export default UpdateInProgressModal;