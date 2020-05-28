import React from 'react';

import InputGroup from '../../components/common/InputGroup/InputGroup';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Hotels from '../../components/Hotels/Hotels';
import Offer from '../../components/Offer/Offer';
import Rooms from '../../components/Rooms/Rooms';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <InputGroup />
      <Hotels />
      <Offer />
      <Rooms />
      <Contact />
      <Footer />   
    </>
  )
}

export default Home;