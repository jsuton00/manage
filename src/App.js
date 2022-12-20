import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUsPage';
import CareersPage from './pages/CareersPage';
import CommunityPage from './pages/CommunityPage';
import GetStartedPage from './pages/GetStartedPage';
import Header from './components/Header';
import Footer from './components/Footer';
import OrangeBanner from './components/OrangeBanner';

const App = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/pricing" element={<PricingPage />} />
					<Route path="/product" element={<ProductPage />} />
					<Route path="about-us" element={<AboutUsPage />} />
					<Route path="/careers" element={<CareersPage />} />
					<Route path="/community" element={<CommunityPage />} />
					<Route path="/get-started" element={<GetStartedPage />} />
				</Routes>
			</main>
			<OrangeBanner />
			<Footer />
		</>
	);
};

export default App;
