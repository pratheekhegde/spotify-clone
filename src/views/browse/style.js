import styled from 'styled-components';
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
`

export const NavLink = styled(Link)`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: .015em;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: .16em;
    color: #fff;
    opacity: .6;
    position: relative;
    border: 0;
    display: inline-block;
    margin: 10px;
    padding: 5px 10px;
    text-decoration: none;
    transition: opacity .2s linear;

    &:visited {
    color: white;
  }
`;
