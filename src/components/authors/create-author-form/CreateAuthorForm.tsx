import React, {FC, PropsWithChildren, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import ValidationToast from "./ValidationToast";

type CreateAuthorFormProps = {
    closeForm: () => void,
    addAuthor: (event: React.FormEvent, newAuthorName: string) => void
};

const CreateAuthorForm: FC<CreateAuthorFormProps> = (props: PropsWithChildren<CreateAuthorFormProps>) => {
    const {closeForm, addAuthor} = props;

    // Author name input field
    const [enteredAuthorName, setEnteredAuthorName] = useState<string>("");

    // Create button
    const handleOnClickCreate = (event: React.FormEvent) => {
        event.preventDefault();
        if (enteredAuthorName==="") {
            setShowToast(true);
            return;
        }
        addAuthor(event, enteredAuthorName);
        setEnteredAuthorName("");
    }

    // Toast
    const [showToast, setShowToast] = useState<boolean>(false);
    const onClickCloseToast = () => setShowToast(false);

    return (
        <Col md={9} sm={12} xs={12} className="px-sm-0 px-xs-5 mt-3">
            <Row className="mx-0 text-center">
                <Col className="px-0" xs={12}>
                    <ValidationToast
                        closeToast={onClickCloseToast}
                        toastVisibility={showToast}
                    />
                </Col>
            </Row>
            <Row className="mx-0">
                <Col className="px-0 py-1 create-author-title" xs={9}>
                    <u>Create Author</u>
                </Col>
                <Col className="pr-2 pt-xl-2 pt-lg-2 pt-md-1 pt-sm-2 pt-xs-3 text-right">
                    <XCircle className="close-btn" onClick={() => closeForm()}/>
                </Col>
            </Row>
            <Row className="mx-0">
                <Col xs={1}/>
                <Col className="px-0">
                    <Form onSubmit={(event: React.FormEvent) => handleOnClickCreate(event)}>
                        <Row className="mx-0 pr-2 pt-3">
                            <Form.Group style={{width: '100%'}}>
                                <Col className="pl-1 pb-0 text-left" xs={12}>
                                    <Form.Label className="author-label mb-0">
                                        Name of Author
                                    </Form.Label>
                                </Col>
                                <Col className="px-0" xs={12}>
                                    <Form.Control
                                        className="author-input"
                                        type="text"
                                        value={enteredAuthorName}
                                        onChange={
                                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                                setEnteredAuthorName(event.target.value)
                                            }
                                        }
                                    />
                                </Col>
                            </Form.Group>
                            <Col className="px-0 pt-4 text-right" xs={12}>
                                <Button className="submit-btn py-1" size="sm" type="submit">
                                    Create
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
}

export default CreateAuthorForm;