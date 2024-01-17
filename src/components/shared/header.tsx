'use client';

import styled from "styled-components";

const Container = styled.div`
    font-size: 2.5rem;
    color: var(--tertiary);
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-width: 1px 0px;
    border-style: solid;
    border-color: var(--secondary);
    height: 60px;

    @media(max-width: 1023px) {
        width: 90%;
    }
`;

interface IProps {
    text: string;
}

const Header: React.FC<IProps> = ({text}) => {
    return (
        <Container>
            {text}
        </Container>
    );
};

export default Header;
