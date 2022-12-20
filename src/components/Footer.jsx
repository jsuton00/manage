import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhiteLogo } from './Logo';
import { SOCIAL_LINKS } from '../constants/socialLinks';
import SocialLink from './SocialLink';
import { FOOTER_NAV_LINKS } from '../constants/navLinks';
import NewsLetterForm from './NewsLetterForm';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-row container">
				<div className="footer-brand-social">
					<div className="footer-brand">
						<Link to="/">
							<div className="footer-brand-logo">
								<WhiteLogo />
							</div>
						</Link>
					</div>
					<div className="footer-social">
						{SOCIAL_LINKS.length > 0 &&
							SOCIAL_LINKS.map((social) => {
								return (
									<SocialLink
										key={social.url}
										url={social.url}
										icon={social.icon}
										alt={social.alt}
									/>
								);
							})}
					</div>
				</div>
				<div className="footer-navmenu">
					<div className="footer-navmenu-col footer-navmenu-left-col">
						{FOOTER_NAV_LINKS.length > 0 &&
							FOOTER_NAV_LINKS.slice(0, 3).map((link) => {
								return (
									<Link
										key={link}
										to={link.split(' ').join('-')}
										className="footer-navmenu-nav-item-link"
									>
										<div className="footer-navmenu-nav-item">
											<p className="footer-navmenu-nav-item-text">{link}</p>
										</div>
									</Link>
								);
							})}
					</div>
					<div className="footer-navmenu-col footer-navmenu-right-col">
						{FOOTER_NAV_LINKS.length > 0 &&
							FOOTER_NAV_LINKS.slice(3, 7).map((link) => {
								return (
									<Link
										key={link}
										to={link.split(' ').join('-')}
										className="footer-navmenu-nav-item-link"
									>
										<div className="footer-navmenu-nav-item">
											<p className="footer-navmenu-nav-item-text">{link}</p>
										</div>
									</Link>
								);
							})}
					</div>
				</div>
				<div className="footer-form">
					<NewsLetterForm />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
