import React, {FC} from 'react';
import './assets/styles/App.scss';
import Library from "./views/Library";
import {Container, Row} from "react-bootstrap"
import Footer from "./components/footer/Footer";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";
import OriginalNavbar from "./components/navbar/OriginalNavbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


const App: FC = () => {
    return (
        <Router>
            <Container className="px-0" fluid>
                <Row className="mx-0">
                    <OriginalNavbar />
                </Row>
                <Row className="mx-0">
                    <Switch>
                        <Route path="/" exact component={Library} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/contactus" component={ContactUs} />
                    </Switch>
                </Row>
                <Row className="mx-0">
                    <Footer />
                </Row>
            </Container>
        </Router>
    );
}

export default App;