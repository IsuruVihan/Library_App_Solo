import React, {FC, PropsWithChildren} from 'react';
import {Toast} from "react-bootstrap";

type ValidationToastProps = {
    closeToast: () => void,
    toastVisibility: boolean
};

const ValidationToast: FC<ValidationToastProps> = (props: PropsWithChildren<ValidationToastProps>) => {
    const {closeToast, toastVisibility} = props;

    return (
        <Toast
            className="mb-4"
            onClose={() => closeToast()}
            show={toastVisibility}
            delay={3000}
            autohide
            style={{width: '80%'}}
        >
            <Toast.Body>
                Please provide an Author name
            </Toast.Body>
        </Toast>
    );
}

export default ValidationToast;