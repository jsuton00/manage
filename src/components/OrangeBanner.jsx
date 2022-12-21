import React from 'react';
import { GetStartedButtonWhite } from './GetStartedButton';

const OrangeBanner = () => {
	return (
		<div className="orange-banner">
			<div className="orange-banner-row container">
				<div className="orange-banner-text">
					<h2 className="orange-banner-title">
						Simplify how your team works today
					</h2>
				</div>
				<div className="orange-banner-get-started">
					<GetStartedButtonWhite />
				</div>
			</div>
		</div>
	);
};

export default OrangeBanner;
