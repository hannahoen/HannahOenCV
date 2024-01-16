'use client';

import styled from "styled-components";

const Container = styled.div`
    border-radius: 8px;
    padding: 12px 24px;

    background: var(--tertiary);
    cursor: pointer;
    
    color: var(--secondary);
    font-weight: 500;
    font-size: 18px;
`;

interface IProps {
    text: string;
    primary: boolean;
    icon?: JSX.Element;
}

const Button: React.FC<IProps> = ({text, primary, icon}) => {
    return (
        <Container>
            {text}
        </Container>
    );
};

export default Button;
