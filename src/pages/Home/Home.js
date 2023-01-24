import React from 'react';
import Accessories from './Accessories';
import Banner from './Banner/Banner';
import BannerSupport from './Banner/BannerSupport';
import ElectricBikes from './ElectricBikes';
import KnowUs from './KnowUs';
import LatestStories from './LatestStories';
import OurReviews from './OurReviews';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerSupport />
            <Products />
            <KnowUs />
            <ElectricBikes />
            <Accessories />
            <OurReviews />
            {/* <LatestStories /> */}
        </div>
    );
};

export default Home;