import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthorDropDownItem} from "../../../../../interfaces/IAuthorDropDownItem";
import Select, {ValueType} from "react-select";
import AuthorDropDownStyles from "../../../../../assets/styles/partials/AuthorDropDownStyles";
import CurrencyInput from "react-currency-input-field";

type UpdateBookFormProps = {
    closeForm: () => void,
    sendAuthorList: () => IAuthorDropDownItem[],
    updateBook: (event: React.FormEvent, bookTitle: string, bookPrice: string, bookAuthor: IAuthorDropDownItem) => void,
    currentEnteredBookTitle: string,
    currentEnteredBookPrice: string,
    currentEnteredBookAuthor: IAuthorDropDownItem
};

const UpdateBookForm: FC<UpdateBookFormProps> = (props) => {
    const {
        closeForm,
        sendAuthorList,
        updateBook,
        currentEnteredBookTitle,
        currentEnteredBookPrice,
        currentEnteredBookAuthor
    } = props;

    // Current entered title
    useEffect(() => {
        setEnteredBookTitle(currentEnteredBookTitle);
    }, [currentEnteredBookTitle]);

    // Current entered price
    useEffect(() => {
        setEnteredBookPrice(currentEnteredBookPrice);
    }, [currentEnteredBookPrice]);

    // Current entered author
    useEffect(() => {
        setEnteredBookAuthor(currentEnteredBookAuthor);
    }, [currentEnteredBookAuthor]);

    // Title input field
    const [enteredBookTitle, setEnteredBookTitle] = useState<string>("");
    const handleOnChangeBookTitle = (bookTitle: string) => {
        setEnteredBookTitle(bookTitle);
    }

    // Price input field
    const [enteredBookPrice, setEnteredBookPrice] = useState<string | undefined>("");
    const handleOnChangeBookPrice = (bookPrice: string | undefined) => {
        setEnteredBookPrice(bookPrice);
    }

    // Author input field
    const [enteredBookAuthor, setEnteredBookAuthor] = useState<IAuthorDropDownItem>({label: "", value: ""});
    const handleOnChangeBookAuthor = (selectedAuthor: ValueType<{ label: string, value: string }, false>) => {
        if (selectedAuthor === null) {
            return;
        }
        setEnteredBookAuthor({value: selectedAuthor.value, label: selectedAuthor.label});
    }

    // Author drop-down list
    const [authorDropDownList, setAuthorDropDownList] = useState<IAuthorDropDownItem[]>([]);
    useEffect(() => {
        setAuthorDropDownList(sendAuthorList());
    }, [sendAuthorList()]);

    // Update button
    const handleOnClickUpdate = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (
            (enteredBookTitle==="") ||
            (enteredBookPrice==="" || enteredBookPrice===undefined) ||
            (enteredBookAuthor==={label: "", value: ""} || enteredBookAuthor===null || enteredBookAuthor===undefined)
        ) {
            return;
        }
        updateBook(event, enteredBookTitle, enteredBookPrice, enteredBookAuthor);
        setEnteredBookTitle("");
        setEnteredBookPrice("");
        setEnteredBookAuthor({label: "", value: ""});
    }

    // Validation
    const [validated, setValidated] = useState<boolean>(false);

    return (
        <Col md={9} sm={12} xs={12} className="px-sm-0 px-xs-5 mt-3">
            <Row className="mx-0">
                <Col className="px-0 py-1 create-author-title" xs={9}>
                    <u>Update Book</u>
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
                                                handleOnChangeBookTitle(event.target.value);
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
                                    <CurrencyInput
                                        required
                                        className="author-input"
                                        style={{width: '100%', borderColor: '#959595', paddingLeft: '0.6em'}}
                                        prefix={'$'}
                                        onValueChange={
                                            (value: string | undefined) => {
                                                handleOnChangeBookPrice(value);
                                            }
                                        }
                                        value={enteredBookPrice}
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
                                        isClearable={true}
                                        isSearchable={true}
                                        value={enteredBookAuthor}
                                        defaultValue={enteredBookAuthor}
                                        options={authorDropDownList}
                                        onChange={
                                            (selectedAuthor) => {
                                                handleOnChangeBookAuthor(selectedAuthor);
                                            }
                                        }
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

export default UpdateBookForm;