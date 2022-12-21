import React from 'react';
import { useNavigate } from 'react-router';

export const GetStartedButton = (props) => {
	const { handleClose } = props;
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/getting-started');
		handleClose();
	};
	return (
		<button type="button" onClick={onClick} className="get-started-button">
			Get Started
		</button>
	);
};

export const GetStartedButtonWhite = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/getting-started');
	};
	return (
		<button
			type="button"
			onClick={onClick}
			className="get-started-button get-started-button-white"
		>
			Get Started
		</button>
	);
};
