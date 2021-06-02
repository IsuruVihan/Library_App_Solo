import React, {FC, PropsWithChildren} from 'react';
import {Modal} from 'react-bootstrap';

type CreateInProgressModalProps = {
    isVisible: boolean,
    closeModal: () => void
};

const CreateInProgressModal: FC<CreateInProgressModalProps> = (props: PropsWithChildren<CreateInProgressModalProps>) => {
    const { isVisible, closeModal } = props;

    return (
        <Modal show={isVisible} onHide={closeModal}>
            <Modal.Body className="text-center create-in-progress-modal">
                Author create in progress. Please complete the process to continue.
            </Modal.Body>
        </Modal>
    );
}

export default CreateInProgressModal;