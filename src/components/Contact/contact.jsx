import React from 'react'
import styles from "./contact.module.scss";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className={styles.contact_section}>
      <div className={`container`}>
        <h2 className={`title_main`}>Wanna Get In Touch With Us</h2>
        <h6 className={`sub_title`}>Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna aliqua.</h6>
        <div className={styles.contact_wrapper}>
            <div className={`row`}>
                <div className={`col-12 col-lg-6`}>
                    <div className={styles.map_wrapper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3930.3749074062994!2d76.26672507502985!3d9.902699990197812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTQnMDkuNyJOIDc2wrAxNicwOS41IkU!5e0!3m2!1sen!2sin!4v1714572864265!5m2!1sen!2sin"
                         width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className={`col-12 col-lg-6`}>
                    <div className={styles.contact_details}>
                        <h3 className={styles.contact_details_title}>GET IN TOUCH WITH US</h3>
                        <h4 className={styles.data}>Phone : <Link to={`tel: +91 9633091579`}>+91 9633091579</Link></h4>
                        <h4 className={styles.data}>Email : <Link to={`mailto:info@indiantouroptions.com`}>info@indiantouroptions.com</Link></h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
