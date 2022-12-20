import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { GetStartedButton } from './GetStartedButton';
import { HeaderNavbar } from './Navbar';

const Header = () => {
	return (
		<header className="header">
			<div className="header-row container">
				<div className="header-brand-section">
					<Link to="/">
						<div className="header-brand">
							<Logo />
						</div>
					</Link>
				</div>
				<div className="header-navbar-section">
					<HeaderNavbar />
				</div>
				<div className="header-get-started-button-section">
					<GetStartedButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
