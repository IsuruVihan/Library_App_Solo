import React, {FC} from 'react';
import './assets/styles/App.scss';
import Library from "./views/Library";
import {Container} from "react-bootstrap"

const App: FC = () => {
    return (
        <Container className="px-0" fluid>
            <Library/>
        </Container>
    );
}

export default App;