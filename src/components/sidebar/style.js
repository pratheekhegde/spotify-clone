import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
    position: fixed;
    width: 234px;
    height: 100vh;
    padding-top: 25px;
    background-color: rgba(0,0,0, 0.8);
`;

export const NavHeader = styled.div`
    padding: 0px 25px;
    color: white;
    width: 185px;
`;

export const NavItemList = styled.ul`
    margin: 0;
    padding: 15px 0;
    list-style: none;
    color: white;

`;

export const NavItem = styled.li`
    margin: 0;   
    padding: 10px 0;
    position: relative;
    ${props =>
        props.isActive &&
        css`
        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 5px;
            bottom: 5px;
            width: 4px;
            background-color: #1ed760;
        }
    `}
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex; 
  align-items: center;
  padding-left: 25px;
  &:visited {
    color: white;
  }
  &:link {
    color: white;
  }

`;

export const Label = styled.div`
    font-size: 14px;
    margin-left:15px;
    text-decoration: none;
`;

