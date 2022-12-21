import React from 'react';
import { HEADER_NAV_LINKS } from '../constants/navLinks';
import { Link } from 'react-router-dom';

export const HeaderNavbar = (props) => {
	const { handleClose } = props;

	const onClick = () => {
		return handleClose();
	};
	return (
		<>
			{HEADER_NAV_LINKS.length > 0 &&
				HEADER_NAV_LINKS.map((link) => {
					return (
						<Link
							key={link}
							to={link.split(' ').join('-')}
							className="header-navbar-nav-item-link"
							onClick={onClick}
						>
							<div className="header-navbar-nav-item">
								<p className="header-navbar-nav-item-text">{link}</p>
							</div>
						</Link>
					);
				})}
		</>
	);
};
