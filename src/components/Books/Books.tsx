import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import '../../assets/styles/partials/_Authors.scss';
import {IAuthor} from "../../interfaces/IAuthor";

type BooksProps = {
    availableAuthors: () => IAuthor[]
};

const Books: FC<BooksProps> = (props) => {
    const { availableAuthors } = props;

    return (
        <Container className="px-md-4 px-sm-5 px-xs-5">
            <h1>Books</h1>
            <ol>
                {availableAuthors().map(
                    (author: IAuthor) => {
                        return (
                            <li>
                                {author.name}
                            </li>
                        );
                    }
                )}
            </ol>
        </Container>
    );
}

export default Books;