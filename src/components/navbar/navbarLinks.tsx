'use client';

import styled from "styled-components";
import { navbarLinks } from "@/assets/data";
import { useMediaQuery } from "react-responsive";


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

    &:hover {
        color: var(--quinary);
    }

    @media(max-width: 500px) {
        font-size: 28px;
    }
`;

interface IProps {
    closeMobileNavbar?: () => void;
}

export const NavbarLinks: React.FC<IProps> = ({
    closeMobileNavbar
}) => {    
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

    const toggleNavbar = () =>{
        if(isMobile && closeMobileNavbar){
            closeMobileNavbar();
        }
    }

    return (
        <Links>
            {navbarLinks.map(link => {
                return (
                    <Link
                        key={Math.random()}
                        href={link.url}
                        onClick={() => {toggleNavbar();}}
                    >
                        {link.text}
                    </Link>
                )
            })}
        </Links>
    );
};
