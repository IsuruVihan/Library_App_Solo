import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import '../assets/styles/partials/_ContactUs.scss';
import ContactUsForm from "../components/contactUs/ContactUsForm";
import Title from "../components/contactUs/Title";

const ContactUs: FC = () => {
    return (
        <Container fluid={true} className="main">
            <Title />
            <ContactUsForm />
        </Container>
    );
}

export default ContactUs;