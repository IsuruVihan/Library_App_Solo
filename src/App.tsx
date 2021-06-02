import React, {FC} from 'react';
import './assets/styles/App.scss';
import Library from "./views/Library";
import {Container, Row} from "react-bootstrap"
import Footer from "./components/footer/Footer";
import AboutUs from "./views/AboutUs";

const App: FC = () => {
    return (
        <Container className="px-0" fluid>
            <Row className="mx-0">
                {/*<Library/>*/}
                <AboutUs />
            </Row>
            <Row className="mx-0">
                <Footer />
            </Row>
        </Container>
    );
}

export default App;