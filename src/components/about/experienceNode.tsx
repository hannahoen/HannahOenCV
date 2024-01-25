'use client';

import { universityIcon, workIcon } from "@/assets/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 24px;
        
    &:before {
        content: "";
        position: relative;
        top: 32px;
        left: 40px;
        bottom: 0;
        height: calc(100% - 32px);
        border-left: 1px solid var(--secondary);
        z-index: -1;
    }
`;

const Bullet = styled.div`
    svg {
        width: 32px;
        height: 32px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Years = styled.div`
    text-transform: uppercase;
    padding: 8px;
    width: fit-content;
    border-radius: 16px;
    background: var(--primary);

    font-size: 12px;
    font-weight: 500;
`;

const Link = styled.a`
    color: var(--tertiary);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
        color: var(--quinary);
    }
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    .position {
        text-transform: uppercase;
        font-weight: 700;
    }
`;

const AdditionalInfo = styled.div`
    white-space: pre-line;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

interface IProps {
    isExperience?: boolean;
    data: IExperience;
}

interface IExperience {
    years: string;
    company?: string;
    university?: string;
    url: string;
    position?: string;
    degree?: string;
    additionInfo: string;
}

export const ExperienceNode: React.FC<IProps> = ({
    isExperience = true,
    data
}) => {
    return (
        <Container>
            <Bullet>
                {isExperience ? workIcon : universityIcon}
            </Bullet>
            {isExperience ? (
                <Info>
                    <Row><Years>{data.years}</Years> </Row>
                    <Heading><span className="position">{data.position}</span> | <Link href={data.url} target="_blank">{data.company}</Link></Heading>
                    <AdditionalInfo>{data.additionInfo}</AdditionalInfo>
                </Info>
            ) : (
                <Info>
                    <Row><Years>{data.years}</Years></Row>
                    <Link href={data.url} target="_blank">{data.university}</Link>
                    <Heading><span className="degree">{data.degree}</span></Heading>
                    <AdditionalInfo>{data.additionInfo}</AdditionalInfo>
                </Info>
            )}
        </Container>
    );
};
