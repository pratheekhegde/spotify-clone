import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    padding: 15px;
    list-style: none;
    color: white;

`;

export const NavItem = styled.li`
    margin: 0;   
    padding: 10px 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex; 
  align-items: center;

  &:visited {
    color: white;
  }

`;

export const Label = styled.span`
    font-size: 14px;
    margin-left:15px;
    text-decoration: none;
`;

