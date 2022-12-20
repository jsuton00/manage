import React from 'react';
import { Carousel } from 'react-bootstrap';
import { REVIEWS } from '../constants/homePageTexts';

const Reviews = () => {
	return (
		<Carousel indicators={false} className="review-carousel">
			{REVIEWS.length > 0 &&
				REVIEWS.map((review) => {
					return (
						<Carousel.Item
							key={review.reviewAuthor}
							className="review-carousel-item"
						>
							<div className="review-container">
								<div className="review-card card">
									<div className="review-author-avatar card-img-top">
										<img src={review.avatar} alt={review.reviewAuthor} />
									</div>
									<div className="review-card-body card-body">
										<h5 className="review-author card-title">
											{review.reviewAuthor}
										</h5>
										<p className="review-text card-text">{review.reviewText}</p>
									</div>
								</div>
							</div>
						</Carousel.Item>
					);
				})}
		</Carousel>
	);
};

export default Reviews;
