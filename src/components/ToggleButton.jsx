import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const ToggleButton = (props) => {
	const { isOpen, handleToggle } = props;

	const onClick = () => {
		return handleToggle();
	};
	return (
		<button type="button" onClick={onClick} className="toggle-button">
			{isOpen ? <MdClose /> : <FaBars />}
		</button>
	);
};

export default ToggleButton;
