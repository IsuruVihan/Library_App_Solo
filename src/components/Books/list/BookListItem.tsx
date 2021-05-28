import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";

type BookListItemProps = {
    name: string,
    id: number,
    // update: (authorId: number) => void,
    // delete: (authorId: number) => void
};

const BookListItem: FC<BookListItemProps> = (props) => {
    const {name, id} = props;

    return (
        <Col xs={12} className="px-0 py-1 book-list-line">
            <Row className="mx-0">
                <Col className="px-0" xl={9} lg={8} md={7} sm={9} xs={7}>
                    {id}. {name}
                </Col>
                <Col className="px-0">
                    <Row className="mx-0 my-0">
                        <Col className="text-right">
                            {/*<Edit className="mx-2 mb-1 edit-icon" onClick={() => props.update(id)} />*/}
                            {/*<Trash2 className="mx-2 mb-1 trash-icon" onClick={() => props.delete(id)} />*/}
                            <Edit className="mx-2 mb-1 edit-icon" />
                            <Trash2 className="mx-2 mb-1 trash-icon" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default BookListItem;