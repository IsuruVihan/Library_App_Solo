import React, {FC, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

type UpdateAuthorFormProps = {
    closeForm: () => void,
    updateAuthor: (event: React.FormEvent, newAuthorName: string) => void
};

const UpdateAuthorForm: FC<UpdateAuthorFormProps> = (props) => {
    const {closeForm, updateAuthor} = props;

    // Author name input field
    const [enteredAuthorName, setEnteredAuthorName] = useState<string>("");

    // Create button
    const handleOnClickUpdate = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (enteredAuthorName === "") {
            return;
        }
        updateAuthor(event, enteredAuthorName);
        setEnteredAuthorName("");
    }

    // Validation
    const [validated, setValidated] = useState<boolean>(false);

    return (
        <Col md={9} sm={12} xs={12} className="px-sm-0 px-xs-5 mt-3">
            <Row className="mx-0">
                <Col className="px-0 py-1 update-author-title" xs={9}>
                    <u>Update Author</u>
                </Col>
                <Col className="pr-2 pt-xl-2 pt-lg-2 pt-md-1 pt-sm-2 pt-xs-3 text-right">
                    <XCircle className="close-btn" onClick={() => closeForm()}/>
                </Col>
            </Row>
            <Row className="mx-0">
                <Col xs={1}/>
                <Col className="px-0">
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={(event: React.FormEvent) => handleOnClickUpdate(event)}
                    >
                        <Row className="mx-0 pr-2 pt-3">
                            <Form.Group style={{width: '100%'}}>
                                <Col className="pl-1 pb-0 text-left" xs={12}>
                                    <Form.Label className="author-label mb-0">
                                        Name of Author
                                    </Form.Label>
                                </Col>
                                <Col className="px-0" xs={12}>
                                    <Form.Control
                                        required
                                        className="author-input"
                                        type="text"
                                        value={enteredAuthorName}
                                        onChange={
                                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                                setEnteredAuthorName(event.target.value)
                                            }
                                        }
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide an Author name.
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Col className="px-0 pt-4 text-right" xs={12}>
                                <Button className="submit-btn py-1" size="sm" type="submit">
                                    Update
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
}

export default UpdateAuthorForm;