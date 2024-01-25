'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";

import { footerLinks, sharedText } from "@/assets/data";
import { doubleChevronUp } from "@/assets/icons";

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

export const Footer: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {setIsMounted(true);}, 500)
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    if (!isMounted) {
        return null;
    } else {
        return (
            <Container>
                <ScrollToTopBtn onClick={scrollToTop}>{doubleChevronUp}</ScrollToTopBtn>
                <Links>
                    {footerLinks.map(link => {
                        return (
                            <Link key={Math.random()} href={link.url}>
                                {link.icon}
                            </Link>
                        );
                    })}
                </Links>
                <Copyright>{sharedText.fullName.toUpperCase()} @{new Date().getFullYear()}</Copyright>
            </Container>
        );
    }    
};
