'use client';

import styled from "styled-components";
import { useForm, ValidationError } from '@formspree/react';
import Header from "./shared/header";

const Container = styled.div`
    position: relative;
    display: flex;
    min-height: 100px;
    width: 100%;
    z-index: 990;
    padding-top: 72px;
    margin-bottom: 48px;

    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    @media(max-width: 1023px) {
      width: 100%;
    }
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 960px;

    input, textarea {
        border: 0px;
        padding: 16px 8px;
        border-radius: 4px;

        background: var(--primary);
        font-size: 14px;
        font-family: Roboto;
        font-weight: 400;
        color: var(--secondary);
    }
`;

const SubmitBtn = styled.button`
    border: 0px;
    border-radius: 4px;
    padding: 16px 8px;
    cursor: pointer;

    background: var(--tertiary)
`;

const Contact: React.FC = () => {
    const [state, handleSubmit] = useForm("xyyrzbla");
    if (state.succeeded) {
        return (
            <Container>
                <Content>
                    <Header text="Don't be shy!"/>
                    Thanks for contacting! I will get back to you as soon as possible 👩‍💻
                </Content>
            </Container>
        );
    }
    return (
        <Container>
            <Content>
                <Header text="Don't be shy!"/>
                <div>Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.</div>
                <ContactForm onSubmit={handleSubmit}>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder="Email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <SubmitBtn type="submit" disabled={state.submitting}> Submit </SubmitBtn>
                </ContactForm>
            </Content>
            
        </Container>
        
    );
};

export default Contact;
