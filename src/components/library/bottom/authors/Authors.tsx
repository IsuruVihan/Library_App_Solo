import React, {FC, useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../../../../assets/styles/partials/_Authors.scss';
import AuthorListItem from "./list/AuthorListItem";
import {IAuthor} from "../../../../interfaces/IAuthor";
import {Plus} from "react-feather";
import CreateAuthorForm from "./form/CreateAuthorForm";
import NoAuthors from "./list/NoAuthors";
import NewAuthorAddedModal from "./modals/NewAuthorAddedModal";
import CreateInProgressModal from "./modals/CreateInProgressModal";
import ConfirmDeleteAuthorModal from "./modals/ConfirmDeleteAuthorModal";
import AuthorDeletedModal from "./modals/AuthorDeletedModal";
import UpdateAuthorForm from "./form/UpdateAuthorForm";
import UpdateInProgressModal from "./modals/UpdateInProgressModal";
import AuthorUpdatedModal from "./modals/AuthorUpdatedModal";

type AuthorsProps = {
  getAuthors: (authorList: IAuthor[]) => void
};

const Authors: FC<AuthorsProps> = (props) => {
  // Author list
  let authorId: number = 1;
  const [authorList, setAuthorList] = useState<IAuthor[]>([]);

  useEffect(() => {
    props.getAuthors(authorList);
  }, [authorList]);

  // Old author & Updated author
  const [authorPair, setAuthorPair] = useState<IAuthor[]>([{name: ""}, {name: ""}]);

  // NewAuthorAddedModal
  const [isVisibleNewAuthorAddedModal, setIsVisibleNewAuthorAddedModal] = useState<boolean>(false);
  const handleCloseNewAuthorAddedModal = () => setIsVisibleNewAuthorAddedModal(false);

  // AuthorUpdatedModal
  const [isVisibleAuthorUpdatedModal, setIsVisibleAuthorUpdatedModal] = useState<boolean>(false);
  const handleCloseAuthorUpdatedModal = () => setIsVisibleAuthorUpdatedModal(false);

  // AuthorDeletedModal
  const [isVisibleAuthorDeletedModal, setIsVisibleAuthorDeletedModal] = useState<boolean>(false);
  const handleCloseAuthorDeletedModal = () => setIsVisibleAuthorDeletedModal(false);
  const [removedAuthor, setRemovedAuthor] = useState<string>("");

  // ConfirmDeleteAuthorModal
  const [isVisibleConfirmDeleteAuthorModal, setIsVisibleConfirmDeleteAuthorModal] = useState<boolean>(false);
  const [authorToBeDeletedID, setAuthorToBeDeletedID] = useState<number>(0);
  const handleOnClickCloseConfirmDeleteAuthorModal = () => {
    setAuthorToBeDeletedID(0);
    setIsVisibleConfirmDeleteAuthorModal(false);
  }
  const handleOnClickConfirmDeleteAction = () => {
    let authorListCopy: IAuthor[] = authorList.slice();
    const deletedAuthor: string = authorListCopy[authorToBeDeletedID - 1].name;
    setRemovedAuthor(deletedAuthor);
    authorListCopy.splice(authorToBeDeletedID - 1, 1);
    setAuthorList(authorListCopy);
    props.getAuthors(authorList);
    setIsVisibleConfirmDeleteAuthorModal(false);
    setAuthorToBeDeletedID(0);
    setIsVisibleAuthorDeletedModal(true);
    setTimeout(
      () => {
        setIsVisibleAuthorDeletedModal(false);
        setRemovedAuthor("");
      },
      1500
    );
    setCreateAuthorFormVisible(false);
    setIsVisibleUpdateAuthorForm(false);
  }

  // CreateInProgressModal
  const [isVisibleCreateInProgressModal, setIsVisibleCreateInProgressModal] = useState<boolean>(false);
  const handleCloseCreateInProgressModal = () => setIsVisibleCreateInProgressModal(false);

  // UpdateInProgressModal
  const [isVisibleUpdateInProgressModal, setIsVisibleUpdateInProgressModal] = useState<boolean>(false);
  const handleCloseUpdateInProgressModal = () => setIsVisibleUpdateInProgressModal(false);

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
    } else if (isVisibleUpdateAuthorForm) {
      setIsVisibleUpdateInProgressModal(true);
      setTimeout(
        () => setIsVisibleUpdateInProgressModal(false),
        3000
      );
      return;
    }
    setCreateAuthorFormVisible(true);
  }

  // Update author icon
  const [isVisibleUpdateAuthorForm, setIsVisibleUpdateAuthorForm] = useState<boolean>(false);
  const [authorWillUpdateID, setAuthorWillUpdateID] = useState<number>(0);
  const handleOnClickCloseUpdateAuthorForm = () => setIsVisibleUpdateAuthorForm(false);
  const handleOnClickUpdateIcon = (authorId: number) => {
    if (createAuthorFormVisible) {
      setIsVisibleCreateInProgressModal(true);
      setTimeout(
        () => setIsVisibleCreateInProgressModal(false),
        3000
      );
      return;
    } else if (isVisibleUpdateAuthorForm) {
      setIsVisibleUpdateInProgressModal(true);
      setTimeout(
        () => setIsVisibleUpdateInProgressModal(false),
        3000
      );
      return;
    }
    setAuthorWillUpdateID(authorId);
    setIsVisibleUpdateAuthorForm(true);
  }
  const handleOnSubmitUpdateForm = (event: React.FormEvent, newAuthorName: string) => {
    event.preventDefault();
    let authorListCopy: IAuthor[] = authorList.slice();
    let authorToBeUpdate: IAuthor = authorListCopy[authorWillUpdateID - 1];
    setAuthorPair([{name: authorToBeUpdate.name}, {name: newAuthorName}]);
    authorToBeUpdate.name = newAuthorName;
    authorListCopy.splice(authorWillUpdateID - 1, 1, authorToBeUpdate);
    setAuthorList(authorListCopy);
    props.getAuthors(authorList);
    setAuthorWillUpdateID(0);
    setIsVisibleUpdateAuthorForm(false);
    setIsVisibleAuthorUpdatedModal(true);
    setTimeout(
      () => {
        setIsVisibleAuthorUpdatedModal(false);
        setAuthorPair([{name: ""}, {name: ""}]);
      }, 3000
    );
  }

  // Delete author icon
  const handleOnClickDeleteAuthor = (authorWillDeleteID: number) => {
    if (createAuthorFormVisible) {
      setIsVisibleCreateInProgressModal(true);
      setTimeout(
        () => setIsVisibleCreateInProgressModal(false),
        3000
      );
      return;
    } else if (isVisibleUpdateAuthorForm) {
      setIsVisibleUpdateInProgressModal(true);
      setTimeout(
        () => setIsVisibleUpdateInProgressModal(false),
        3000
      );
      return;
    }
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
    props.getAuthors(authorList);
    setCreateAuthorFormVisible(false);
    setIsVisibleNewAuthorAddedModal(true);
    setTimeout(
      () => setIsVisibleNewAuthorAddedModal(false),
      1500
    );
  }

  // Renderings
  const renderAuthorList = () => {
    return (
      authorList.length > 0 && authorList.map(
        (Author: IAuthor) => {
          return (
            <AuthorListItem
              name={Author.name}
              id={authorId}
              key={authorId++}
              update={handleOnClickUpdateIcon}
              delete={handleOnClickDeleteAuthor}
            />
          );
        }
      )
    );
  }

  return (
    <Container className="px-md-4 px-sm-5 px-xs-5">
      <NewAuthorAddedModal
        isVisible={isVisibleNewAuthorAddedModal}
        closeModal={handleCloseNewAuthorAddedModal}
        newlyAddedAuthorName={authorList.length > 0 ? authorList[authorList.length - 1].name : ""}
      />
      <AuthorUpdatedModal
        isVisible={isVisibleAuthorUpdatedModal}
        closeModal={handleCloseAuthorUpdatedModal}
        previousAuthorName={authorPair[0].name}
        newAuthorName={authorPair[1].name}
      />
      <AuthorDeletedModal
        isVisible={isVisibleAuthorDeletedModal}
        closeModal={handleCloseAuthorDeletedModal}
        deletedAuthorName={removedAuthor}
      />
      {authorToBeDeletedID !== 0 && <ConfirmDeleteAuthorModal
          isVisible={isVisibleConfirmDeleteAuthorModal}
          close={handleOnClickCloseConfirmDeleteAuthorModal}
          confirmDelete={handleOnClickConfirmDeleteAction}
          nameOfAuthorToBeDeleted={authorList[authorToBeDeletedID - 1].name}
      />}
      <CreateInProgressModal
        isVisible={isVisibleCreateInProgressModal}
        closeModal={handleCloseCreateInProgressModal}
      />
      <UpdateInProgressModal
        isVisible={isVisibleUpdateInProgressModal}
        closeModal={handleCloseUpdateInProgressModal}
      />
      <Row>
        <Col xs={12} className="text-xs-left authors-title px-0 pb-1">
          Authors
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="px-0 pt-4">
          {renderAuthorList()}
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
        {
          isVisibleUpdateAuthorForm &&
          <UpdateAuthorForm
              closeForm={handleOnClickCloseUpdateAuthorForm}
              updateAuthor={handleOnSubmitUpdateForm}
              currentEnteredAuthorName={authorList[authorWillUpdateID - 1].name}
          />
        }
        <Col className="mt-3"/>
      </Row>
    </Container>
  );
}

export default Authors;