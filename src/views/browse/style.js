import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
    padding: 20px 0;
    width: 100%;
`;

export const NavItemList = styled.ul`
    list-style: none;
    margin: 0;
    text-align: center;
`;

export const NavItem = styled.li`
    margin:0;
    display: inline-block;
    position: relative;
    ${props =>
        props.isActive &&
        css`
        &::before {
            content: "";
            height: 2px;
            background-color: #1db954;
            width: 30px;
            position: absolute;
            display: block;
            left: 50%;
            bottom: 0;
            margin-left: -15px;
        }
    `}
`

export const NavLink = styled(Link)`
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: .015em;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: .16em;
    color: #fff;
    position: relative;
    border: 0;
    display: inline-block;
    margin: 10px 10px 0;
    padding: 5px 10px;
    text-decoration: none;
    transition: opacity .2s linear;

    &:visited {
        color: white;
    }
    &:link {
        color: white;
    }
`;

export const MediaListWrapper = styled.section`
    padding: 30px 20px;
`;