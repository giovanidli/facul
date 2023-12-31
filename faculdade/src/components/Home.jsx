import React from 'react';
import BestSellers from './BestSellers.jsx';
import BuildYourPC from './BuildYourPC.jsx';
import CategorySearch from './CategorySearch.jsx';
import DailyOffers from './DailyOffers.jsx';
import ExploreProducts from './ExploreProducts.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import LatestReleases from './LatestReleases.jsx';
import Navbar from './Navbar.jsx';
import Carrinho from './Carrinho.jsx';
import Sobre from './Sobre.jsx';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <DailyOffers />
            <CategorySearch />
            <BestSellers />
            <BuildYourPC />
            <ExploreProducts />
            <LatestReleases />
            <Footer />
            <Carrinho />
        </div>
    );
}
export default Home;