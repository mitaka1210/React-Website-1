import HeroSection from '../Hero/HeroSection';

import React from 'react';
import Cards from '../card/Cards';
import Footer from '../footer/footer';
function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
