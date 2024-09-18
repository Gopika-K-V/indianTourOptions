import React from 'react'
import styles from "./contact.module.scss";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className={styles.contact_section}>
      <div className={styles.contact_wrapper}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <div className={styles.map_wrapper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3930.3749074062994!2d76.26672507502985!3d9.902699990197812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTQnMDkuNyJOIDc2wrAxNicwOS41IkU!5e0!3m2!1sen!2sin!4v1714572864265!5m2!1sen!2sin"
                         width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
