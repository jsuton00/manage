export const validateForm = (value) => {
	let error = {};

	if (!value) {
		error = 'No email address is provided';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
		error = 'Email address is invalid!';
	}

	return error;
};
