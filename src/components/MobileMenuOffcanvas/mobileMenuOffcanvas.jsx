import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { navLinks } from '../HeaderComponent/headerComponent';
import { Link } from 'react-router-dom';
import styles from "./mobileMenuOffcanvas.module.scss";

const MobileMenuOffcanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button variant="primary" onClick={handleShow}>
                Launch
            </button>

            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <ul className={styles.nav_list}>
                        {navLinks.map((item) => {
                            return (
                                <li className={styles.nav_list_item} key={item.id}>
                                    <Link className={styles.nav_link} onClick={handleClose} to={item?.link}>
                                        <span>{item.linkText}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MobileMenuOffcanvas
