'use client';

import Image from "next/image";
import { useMediaQuery } from 'react-responsive'
import styled, { keyframes } from "styled-components";
import logo from "../assets/images/logo.png"
import { closeIcon, hamburger } from "@/assets/icons";
import { useState } from "react";

const slideFromRight = keyframes`
  0% {
    opacity:0;
    right: -480px;
  }
  100% {
    opacity:1;
    right: 0px;
  }
`;

const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    background: var(--secondary);
    color: var(--tertiary);
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
`;

const Logo = styled.div`
    @media(max-width: 500px) {
        padding: 0px 32px;
    }
`;

const Hamburger = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    padding: 0px 32px;
    cursor: pointer;

    svg {
        width: 32px;
        height: 32px;
    }
`;

const CloseBtn = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    padding: 0px 32px;
    cursor: pointer;

    svg {
        width: 32px;
        height: 32px;
    }
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 48px;
    height: 56px;

    background: var(--secondary);
    color: var(--tertiary);

    @media(max-width: 500px) {
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
`;

const Link = styled.a`
    color: var(--tertiary);
    font-weight: 600;
    cursor: pointer;
    
    display: flex;
    align-items: center;

    @media(max-width: 500px) {
        font-size: 28px;
    }
`;

const MobileNavbar = styled.div<{ toggle: boolean; isMobile: boolean }>`
    animation: ${slideFromRight} 0.3s linear;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    isolation: isolate;
    z-index: 1000;
    position: fixed;
    width: ${(props) => (props.isMobile ? "100%" : "0px")};
    right: ${(props) => (props.toggle ? "0px" : "-500px")};
    height: 100%;

    background: var(--secondary);
    transition: right 1s ease;
    bottom: 0px;
    padding: 24px;

    .logo{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 72px 0px;
    }
`;

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

    const links = [
        {
            text: "About",
            url: "#about",
        }, {
            text: "Portfolio",
            url: "#portfolio",
        }, {
            text: "Contact",
            url: "#contact",
        }
    ];
    return (
        <Container>
            <Logo>
                <Link href="#hero">
                    <Image
                        src={logo}
                        alt=""
                        height="48"
                        width="48"
                    />
                </Link>
            </Logo>
            {isMobile ? (
                <Hamburger onClick={() => { setToggle(!toggle); }}>{hamburger}</Hamburger>
            ) : (
                <Links>
                    {links.map(link => {
                        return (
                            <Link
                                key={Math.random()}
                                href={link.url}
                            >
                                {link.text}
                            </Link>
                        )
                    })}
                </Links>
            )}
            <MobileNavbar toggle={toggle} isMobile={isMobile}>
                <CloseBtn onClick={() => { setToggle(!toggle); }}>{closeIcon}</CloseBtn>
                <div className="logo">
                    <Image
                        src={logo}
                        alt=""
                        height="100"
                        width="100"
                    />
                </div>
                <Links>
                    {links.map(link => {
                        return (
                            <Link
                                key={Math.random()}
                                href={link.url}
                                onClick={() => { setToggle(!toggle); }}
                            >
                                {link.text}
                            </Link>
                        )
                    })}
                </Links>
            </MobileNavbar>
        </Container>
    );
};

export default Navbar;
