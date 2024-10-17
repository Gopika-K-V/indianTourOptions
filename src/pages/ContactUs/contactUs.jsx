import React from 'react';
import Contact from '../../components/Contact/contact';
import ContactTiles from '../../components/ContactTiles/contactTiles';
import AddClassToHeader from '../../components/AddClassToHeader';

const AboutUs = () => {
  return (
    <main style={{ '--bs-body-bg': '#FFFFFF' }}>
      <AddClassToHeader className="white_header"/>
      <div className={`pt-5 mt-5`}>
        <ContactTiles />
        <Contact />
      </div>
    </main>
  )
}

export default AboutUs
