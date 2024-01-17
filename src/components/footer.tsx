'use client';

import styled from "styled-components";
import { linkdinLogo, mailLogo, doubleChevronUp } from "@/assets/icons";
import { useEffect, useState } from "react";

const Container = styled.div`
    height: 168px;
    background: var(--tertiary);
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

const Links = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 16px;
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

const ScrollToTopBtn = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    top: -25px;

    background: var(--secondary);
    color: var(--tertiary);
    text-align: center;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 24px;
        height: 24px;
    }
`;

const Footer: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {setIsMounted(true);}, 500)
    }, []);
  
    if (!isMounted) {
      return null;
    }

    const links = [
        {
            icon: linkdinLogo,
            url: "https://www.linkedin.com/in/hannah-michelle-oen-233774b3/"
        }, {
            icon: mailLogo,
            url: "mailto:hannahmich@gmail.com"
        }
    ];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Container>
            <ScrollToTopBtn onClick={scrollToTop}>{doubleChevronUp}</ScrollToTopBtn>
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
