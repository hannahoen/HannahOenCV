'use client';

import styled from "styled-components";
import { linkdinLogo, mailLogo } from "@/assets/icons";

const Container = styled.div`
    height: 168px;
    background: var(--tertiary);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;
const Links = styled.div`
    display: flex;
    gap: 24px;
`;
const Link = styled.a`
    svg {
        width: 50px;
        height: 50px;
    }
`;
const Copyright = styled.div`
    font-weight: 500;
    font-size: 14px;
`;

const Footer: React.FC = () => {
    const links = [
        {
            icon: linkdinLogo,
            url: "https://www.linkedin.com/in/hannah-michelle-oen-233774b3/"
        }, {
            icon: mailLogo,
            url: "mailto:hannahmich@gmail.com"
        }
    ];

    return (
        <Container>
            <Links>
                {links.map(link => {
                    return (
                        <Link key={Math.random()} href={link.url}>
                            {link.icon}
                        </Link>
                    );
                })}
            </Links>
            <Copyright>HANNAH MICHELLE OEN @2024</Copyright>
        </Container>
    );
};

export default Footer;
