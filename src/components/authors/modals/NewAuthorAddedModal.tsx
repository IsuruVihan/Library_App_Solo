import React, {FC, PropsWithChildren} from 'react';
import {Modal} from 'react-bootstrap';

type NewAuthorAddedModalProps = {
    isVisible: boolean,
    closeModal: () => void,
    newlyAddedAuthorName: string
};

const NewAuthorAddedModal: FC<NewAuthorAddedModalProps> = (props: PropsWithChildren<NewAuthorAddedModalProps>) => {
    const { isVisible, closeModal, newlyAddedAuthorName } = props;

    return (
        <Modal show={isVisible} onHide={closeModal}>
            <Modal.Body className="text-center new-author-added-modal">
                New Author "{newlyAddedAuthorName}" added!
            </Modal.Body>
        </Modal>
    );
}

export default NewAuthorAddedModal;