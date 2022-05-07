import { FaSearch } from 'react-icons/fa';
import React from 'react';
import { NavContainer, NavItems, NavSearch, StyledNavLink } from './Navbar.styles';

const Navbar = () => {
	return (
		<NavContainer>
			<NavItems>
				<StyledNavLink to="/movies">
                    Movies
				</StyledNavLink>
				<StyledNavLink to="/tv">
                    Tv
				</StyledNavLink>
			</NavItems>
			<NavSearch>
				<FaSearch />
			</NavSearch>
		</NavContainer>
	);
};

export default Navbar;
