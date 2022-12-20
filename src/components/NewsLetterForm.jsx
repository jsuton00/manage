import React, { useState } from 'react';

const NewsLetterForm = () => {
	const [inputValue, setInputValue] = useState('');

	const onChange = (e) => {
		return setInputValue(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
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
					className="newsletter-sign-up-form-input"
					onChange={onChange}
					value={inputValue}
				/>
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
