import React from 'react';
import {FeaturedProduct, Hero,Services,Contact} from '../components'


const HomePage = () => {
    return (
        <main>
            <Hero/>
            <FeaturedProduct/>
            <Services/>
            <Contact/>
        </main>
    )
}

export default HomePage;
