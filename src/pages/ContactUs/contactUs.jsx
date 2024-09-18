import React from 'react';
import Contact from '../../components/Contact/contact';
import ContactTiles from '../../components/ContactTiles/contactTiles';

const AboutUs = () => {
  return (
    <div className={`pt-5 mt-5`}>
      <ContactTiles />
      <Contact />
    </div>
  )
}

export default AboutUs
