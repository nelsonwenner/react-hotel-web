import React from 'react';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import InputGroup from '../../components/common/InputGroup/InputGroup';
import Hotels from '../../components/Hotels/Hotels';
import Offer from '../../components/Offer/Offer';

const Home = () => {
  return (
    <>
    
      <Header />
      <Banner />
      <InputGroup />
      <Hotels />
      <Offer />

    </>
  )
}

export default Home;