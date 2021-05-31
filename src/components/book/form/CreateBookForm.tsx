import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthorDropDownItem} from "../../../interfaces/IAuthorDropDownItem";
import Select from "react-select";
import AuthorDropDownStyles from "../../../assets/styles/partials/AuthorDropDownStyles";

type CreateBookFormProps = {
    closeForm: () => void,
    sendAuthorList: () => IAuthorDropDownItem[]
    // addAuthor: (event: React.FormEvent, newAuthorName: string) => void
};

const CreateBookForm: FC<CreateBookFormProps> = (props) => {
    const { closeForm, sendAuthorList } = props;

    // Author drop-down list
    const [authorDropDownList, setAuthorDropDownList] = useState<IAuthorDropDownItem[]>([]);
    useEffect(() => {
        setAuthorDropDownList(sendAuthorList());
    }, [sendAuthorList()]);

    // Validation
    const [validated, setValidated] = useState<boolean>(false);

    // Title input field
    const [enteredBookTitle, setEnteredBookTitle] = useState<string>("");

    // Price input field
    const [enteredBookPrice, setEnteredBookPrice] = useState<string>("");

    // Author input field
    const [enteredBookAuthor, setEnteredBookAuthor] = useState<string>("");

    return (
        <Col md={9} sm={12} xs={12} className="px-sm-0 px-xs-5 mt-3">
            <Row className="mx-0">
                <Col className="px-0 py-1 create-author-title" xs={9}>
                    <u>Create Book</u>
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
                    >
                        <Row className="mx-0 pr-2 pt-3">
                            <Form.Group style={{width: '100%'}}>
                                <Col className="pl-1 pb-0 text-left" xs={12}>
                                    <Form.Label className="author-label mb-0">
                                        Title of the Book
                                    </Form.Label>
                                </Col>
                                <Col className="px-0" xs={12}>
                                    <Form.Control
                                        required
                                        className="author-input"
                                        type="text"
                                        value={enteredBookTitle}
                                        onChange={
                                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                                setEnteredBookTitle(event.target.value)
                                            }
                                        }
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a Title.
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group style={{width: '100%'}}>
                                <Col className="pl-1 pb-0 text-left" xs={12}>
                                    <Form.Label className="author-label mb-0">
                                        Price
                                    </Form.Label>
                                </Col>
                                <Col className="px-0" xs={12}>
                                    <Form.Control
                                        required
                                        className="author-input"
                                        type="text"
                                        value={enteredBookPrice}
                                        onChange={
                                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                                setEnteredBookPrice(event.target.value)
                                            }
                                        }
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a Price.
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group style={{width: '100%'}}>
                                <Col className="pl-1 pb-0 text-left" xs={12}>
                                    <Form.Label className="author-label mb-0">
                                        Author
                                    </Form.Label>
                                </Col>
                                <Col className="px-0" xs={12}>
                                    <Select
                                        styles={AuthorDropDownStyles}
                                        className="author-input"
                                        classNamePrefix="select"
                                        defaultValue={authorDropDownList[0]}
                                        isClearable={true}
                                        isSearchable={true}
                                        options={authorDropDownList}
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide an Author.
                                    </Form.Control.Feedback>
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

export default CreateBookForm;