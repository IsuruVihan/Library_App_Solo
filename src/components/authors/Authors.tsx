import React, {FC, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../../assets/styles/partials/_Authors.scss';
import AuthorListItem from "./list/AuthorListItem";
import {IAuthor} from "../../interfaces/IAuthor";
import {Plus} from "react-feather";
import CreateAuthorForm from "./form/CreateAuthorForm";
import NoAuthors from "./list/NoAuthors";
import NewAuthorAddedModal from "./modals/NewAuthorAddedModal";
import CreateInProgressModal from "./modals/CreateInProgressModal";
import ConfirmDeleteAuthorModal from "./modals/ConfirmDeleteAuthorModal";
import AuthorDeletedModal from "./modals/AuthorDeletedModal";

const Authors: FC = () => {
    // Author list
    let authorId: number = 1;
    const [authorList, setAuthorList] = useState<IAuthor[]>([]);

    // NewAuthorAddedModal
    const [isVisibleNewAuthorAddedModal, setIsVisibleNewAuthorAddedModal] = useState<boolean>(false);
    const handleCloseNewAuthorAddedModal = () => setIsVisibleNewAuthorAddedModal(false);

    // AuthorDeletedModal
    const [isVisibleAuthorDeletedModal, setIsVisibleAuthorDeletedModal] = useState<boolean>(false);
    const handleCloseAuthorDeletedModal = () => setIsVisibleAuthorDeletedModal(false);

    // ConfirmDeleteAuthorModal
    const [isVisibleConfirmDeleteAuthorModal, setIsVisibleConfirmDeleteAuthorModal] = useState<boolean>(false);
    const [authorToBeDeletedID, setAuthorToBeDeletedID] = useState<number>(0);
    const handleOnClickCloseConfirmDeleteAuthorModal = () => {
        setAuthorToBeDeletedID(0);
        setIsVisibleConfirmDeleteAuthorModal(false);
    }
    const handleOnClickConfirmDeleteAction = () => {
        let authorListCopy: IAuthor[] = authorList.slice();
        const deletedAuthor: string = authorListCopy[authorToBeDeletedID-1].name;
        authorListCopy.splice(authorToBeDeletedID-1, 1);
        setAuthorList(authorListCopy);
        setIsVisibleConfirmDeleteAuthorModal(false);
        setAuthorToBeDeletedID(0);
        setIsVisibleAuthorDeletedModal(true);
        setTimeout(
            () => setIsVisibleAuthorDeletedModal(false),
            1500
        );
        console.log("Author deleted: " + deletedAuthor);
    }

    // CreateInProgressModal
    const [isVisibleCreateInProgressModal, setIsVisibleCreateInProgressModal] = useState<boolean>(false);
    const handleCloseCreateInProgressModal = () => setIsVisibleCreateInProgressModal(false);

    // Create author form
    const [createAuthorFormVisible, setCreateAuthorFormVisible] = useState<boolean>(false);

    // Add author button
    const handleOnClickAddAuthor = () => {
        if (createAuthorFormVisible) {
            setIsVisibleCreateInProgressModal(true);
            setTimeout(
                () => setIsVisibleCreateInProgressModal(false),
                3000
            );
            return;
        }
        setCreateAuthorFormVisible(true);
    }

    // Delete author icon
    const handleOnClickDeleteAuthor = (authorWillDeleteID: number) => {
        setAuthorToBeDeletedID(authorWillDeleteID);
        setIsVisibleConfirmDeleteAuthorModal(true);
    }

    // Close button (Create author form)
    const handleOnClickCloseAddAuthor = () => setCreateAuthorFormVisible(false);

    // Create button
    const handleOnClickCreate = (event: React.FormEvent, newAuthorName: string) => {
        event.preventDefault();
        let authorListCopy: IAuthor[] = authorList.slice();
        authorListCopy.push({name: newAuthorName});
        setAuthorList(authorListCopy);
        setCreateAuthorFormVisible(false);
        setIsVisibleNewAuthorAddedModal(true);
        setTimeout(
            () => setIsVisibleNewAuthorAddedModal(false),
            1500
        );
    }

    return (
        <Container className="px-md-4 px-sm-5 px-xs-5">
            <NewAuthorAddedModal
                isVisible={isVisibleNewAuthorAddedModal}
                closeModal={handleCloseNewAuthorAddedModal}
                newlyAddedAuthorName={authorList.length > 0 ? authorList[authorList.length - 1].name : ""}
            />
            <AuthorDeletedModal
                isVisible={isVisibleAuthorDeletedModal}
                closeModal={handleCloseAuthorDeletedModal}
                deletedAuthorName={""}
            />
            {authorToBeDeletedID !== 0 && <ConfirmDeleteAuthorModal
                isVisible={isVisibleConfirmDeleteAuthorModal}
                close={handleOnClickCloseConfirmDeleteAuthorModal}
                confirmDelete = {handleOnClickConfirmDeleteAction}
                nameOfAuthorToBeDeleted={authorList[authorToBeDeletedID-1].name}
            />}
            <CreateInProgressModal
                isVisible={isVisibleCreateInProgressModal}
                closeModal={handleCloseCreateInProgressModal}
            />
            <Row>
                <Col xs={12} className="text-xs-left authors-title px-0 pb-1">
                    Authors
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="px-0 pt-4">
                    {authorList.length > 0 && authorList.map(
                        (Author: IAuthor) => {
                            return (
                                <AuthorListItem
                                    name={Author.name}
                                    id={authorId}
                                    key={authorId++}
                                    delete={handleOnClickDeleteAuthor}
                                />
                            );
                        }
                    )}
                    {authorList.length === 0 && <NoAuthors/>}
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="mt-2 px-0">
                    <Plus className="plus-icon mb-1 ml-0"/>
                    <span className="px-0 add-author-text" onClick={handleOnClickAddAuthor}>
                        Add Author
                    </span>
                </Col>
            </Row>
            <Row>
                {
                    createAuthorFormVisible &&
                    <CreateAuthorForm
                        closeForm={handleOnClickCloseAddAuthor}
                        addAuthor={handleOnClickCreate}
                    />
                }
                <Col className="mt-3"/>
            </Row>
        </Container>
    );
}

export default Authors;