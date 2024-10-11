import React from 'react';
import Contact from '../../components/Contact/contact';
import ContactTiles from '../../components/ContactTiles/contactTiles';

const AboutUs = () => {
  return (
    <main style={{ '--bs-body-bg': '#FFFFFF' }}>
      <div className={`pt-5 mt-5`}>
        <ContactTiles />
        <Contact />
      </div>
    </main>
  )
}

export default AboutUs
