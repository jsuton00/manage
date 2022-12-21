import React, { useState } from 'react';
import { validateForm } from '../utils/validateForm';

const NewsLetterForm = () => {
	const [inputValue, setInputValue] = useState('');

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState('');

	const onChange = (e) => {
		e.persist();
		return setInputValue(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setError(validateForm(inputValue));
		if (error.length === 0) {
			setIsSubmitted(true);
		} else {
			console.log(error);
		}

		setInputValue('');
	};
	return (
		<form
			name="newsletter-sign-up-form"
			className="newsletter-sign-up-form"
			onSubmit={onSubmit}
		>
			<div className="newsletter-sign-up-form-input-section">
				<input
					name="newsletter-sign-up-form-input"
					placeholder="Get updates in your inbox"
					className={`newsletter-sign-up-form-input ${
						error && 'newsletter-sign-up-form-input-error'
					}`}
					onChange={onChange}
					value={inputValue}
				/>
				{isSubmitted && error && <p className="invalid-feedback">{error}</p>}
			</div>
			<div className="newsletter-sign-up-form-submit-section">
				<button
					type="submit"
					name="newsletter-sign-up-form-submit"
					className="newsletter-sign-up-form-submit"
				>
					Go
				</button>
			</div>
		</form>
	);
};

export default NewsLetterForm;
