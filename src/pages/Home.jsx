import React from 'react';
import Hero from '../components/Hero';
import Premium from '../components/Premium';
import Location from '../components/Location';
import Flats from '../components/Flats';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';


function Home() {
  return (
    <>
      <Hero />
      <Premium />
      <Location />
      <Flats />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;