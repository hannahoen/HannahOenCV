'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'

import { closeIcon, hamburger } from "@/assets/icons";
import logo from "../../assets/images/logo.png";
import { NavbarLinks } from "./navbarLinks";

const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    background: var(--secondary);
    color: var(--tertiary);
    display:flex;
    flex-direction: column;
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

const Link = styled.a`
    color: var(--tertiary);
    font-weight: 600;
    cursor: pointer;
    
    display: flex;
    align-items: center;

    &:hover {
        color: var(--quinary);
    }

    @media(max-width: 500px) {
        font-size: 28px;
    }
`;

const Top = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    @media(max-width: 500px) {
        padding: 0px;
        width: 100%;
    }
`;

const MobileNavbar = styled.div<{ $toggle: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    isolation: isolate;
    z-index: 1000;
    position: fixed;
    right: ${({ $toggle }) => ($toggle ? "0px" : "-500px")};
    height: 100%;

    background: var(--secondary);
    transition: right 1s ease;
    bottom: 0px;
    padding: 24px;

    @media(max-width: 500px) {
        width: 100%;
    }

    .logo{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 72px 0px;
    }
`;

export const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

    useEffect(() => {
        setIsMounted(true);
    }, []);
  
    if (!isMounted) {
        return null;
    } else {
        return (
            <Container>
                <Top>
                    <Logo>
                        <Link href="#hero">
                            <Image
                                src={logo}
                                alt=""
                                height="48"
                                width="48"
                                priority
                            />
                        </Link>
                    </Logo>
                    <div>
                        {isMobile ? (
                            <Hamburger onClick={() => { setToggle(!toggle); }}>
                                {hamburger}
                            </Hamburger>
                        ) : (
                            <NavbarLinks />
                        )}
                    </div>
                </Top>
                <MobileNavbar $toggle={toggle}>
                    <CloseBtn onClick={() => { setToggle(!toggle); }}>{closeIcon}</CloseBtn>
                    <div className="logo">
                        <Image
                            src={logo}
                            alt=""
                            height="100"
                            width="100"
                        />
                    </div>
                    <NavbarLinks />
                </MobileNavbar>
            </Container>
        );
    }
};
