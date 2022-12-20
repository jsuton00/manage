import React from 'react';
import { GetStartedButton } from '../components/GetStartedButton';
import { WHAT_DIFFERENT_LIST } from '../constants/homePageTexts';
import Reviews from '../components/Reviews';

const HomePage = () => {
	return (
		<div className="home-page container">
			<div className="hero-section">
				<div className="hero-text-col">
					<h1 className="hero-title">
						Bring everyone together to build better products.
					</h1>
					<p className="hero-text">
						Manage makes it simple for software teams to plan day-to-day tasks
						while keeping the larger team goals in view.
					</p>
					<div className="hero-button-row">
						<GetStartedButton />
					</div>
				</div>
			</div>
			<div className="what-different-section">
				<div className="what-different-title-text-col">
					<h2 className="what-different-title">
						What’s different about Manage?
					</h2>
					<p className="what-different-text">
						Manage provides all the functionality your team needs, without the
						complexity. Our software is tailor-made for modern digital product
						teams.
					</p>
				</div>
				<div className="what-different-list-col">
					{WHAT_DIFFERENT_LIST.length > 0 &&
						WHAT_DIFFERENT_LIST.map((listItem) => {
							return (
								<div
									key={listItem.listItemNumber}
									className="what-different-list-item"
								>
									<div className="what-different-list-item-number-section">
										<p className="what-different-list-item-number">
											{listItem.listItemNumber}
										</p>
									</div>
									<div className="what-different-list-item-text-section">
										<div className="what-different-list-item-text-wrapper">
											<h5 className="what-different-list-item-title">
												{listItem.listItemTitle}
											</h5>
											<p className="what-different-list-item-text">
												{listItem.listItemText}
											</p>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div className="carousel-section">
				<h2 className="carousel-section-title">What they’ve said</h2>
				<div className="carousel-row">
					<Reviews />
				</div>
				<div className="carousel-button-row">
					<GetStartedButton />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
