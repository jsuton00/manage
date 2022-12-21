import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { GetStartedButton } from './GetStartedButton';
import { HeaderNavbar } from './Navbar';
import ToggleButton from './ToggleButton';
import NavModal from './NavModal';

const Header = (props) => {
	const { width, isOpen, handleToggle, handleClose } = props;
	return (
		<header className="header">
			<div className="header-row container">
				{isOpen ? (
					<></>
				) : (
					<div className="header-brand-section">
						<Link to="/">
							<div className="header-brand">
								<Logo />
							</div>
						</Link>
					</div>
				)}
				{width < 992 ? (
					<></>
				) : (
					<div className="header-navbar-section">
						<HeaderNavbar />
					</div>
				)}
				{isOpen ? (
					<></>
				) : (
					<div
						className={`header-${
							width < 992 ? 'toggle' : 'get-started'
						}-button-section`}
					>
						{width < 992 ? (
							<ToggleButton isOpen={isOpen} handleToggle={handleToggle} />
						) : (
							<GetStartedButton />
						)}
					</div>
				)}
			</div>
			{isOpen ? (
				<NavModal
					isOpen={isOpen}
					handleToggle={handleToggle}
					handleClose={handleClose}
				/>
			) : (
				<></>
			)}
		</header>
	);
};

export default Header;
