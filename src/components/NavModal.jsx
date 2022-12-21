import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { HeaderNavbar } from './Navbar';
import { GetStartedButton } from './GetStartedButton';
import ToggleButton from './ToggleButton';

const NavModal = (props) => {
	const { isOpen, handleToggle, handleClose } = props;

	const onClick = () => {
		return handleClose();
	};
	return (
		<div className="nav-modal">
			<div className="nav-modal-content container">
				<div className="nav-modal-header">
					<Link to="/" onClick={onClick}>
						<div className="nav-modal-brand">
							<Logo />
						</div>
					</Link>
					<div className="nav-modal-toggle">
						<ToggleButton isOpen={isOpen} handleToggle={handleToggle} />
					</div>
				</div>
				<div className="nav-modal-main">
					<div className="nav-modal-nav-menu">
						<HeaderNavbar handleClose={handleClose} />
						<div className="nav-modal-get-started-button">
							<GetStartedButton handleClose={handleClose} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavModal;
