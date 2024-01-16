'use client';

import Image from "next/image";
import styled from "styled-components";
import logo from "../assets/images/logo.png"

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
const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 48px;
    height: 56px;

    background: var(--secondary);
    color: var(--tertiary)
`;
const Link = styled.a`
    color: var(--tertiary);
    font-weight: 600;
    cursor: pointer;
    
    display: flex;
    align-items: center;
`;

const Navbar: React.FC = () => {
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
    ]
    return (
        <Container>
            <Link href="#hero">
                <Image
                    src={logo}
                    alt=""
                    height="48"
                    width="48"
                />
            </Link>
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
        </Container>
    );
};

export default Navbar;
