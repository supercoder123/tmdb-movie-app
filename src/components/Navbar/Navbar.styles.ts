import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    position: fixed;
    top: 0;
    width: 100%;
`;

export const NavItems = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NavSearch = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink).attrs({
	activeClassName: 'active'
})`
    font-size: 18px;
    color: white;
    text-decoration: none;
    padding-right: 40px;

    &.${(props) => props.activeClassName} {
        font-weight: bold;
        text-decoration: underline;
  }
`;


