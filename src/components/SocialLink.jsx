import React from 'react';

const SocialLink = (props) => {
	const { url, icon, alt } = props;

	return (
		<div className="social-link-button">
			<a
				href={url}
				className="social-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={icon} alt={alt} className="social-link-logo" />
			</a>
		</div>
	);
};

export default SocialLink;
