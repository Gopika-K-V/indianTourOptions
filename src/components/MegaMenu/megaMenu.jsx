import React, { useState } from 'react';
import styles from "./megaMenu.module.scss";

const MegaMenu = (menuLinks) => {
    const [currentImage, setCurrentImage] = useState(''); // State to store the current image URL

    // Function to handle hovering over a menu item
    const handleMenuItemHover = (image) => {
        setCurrentImage(image);
    };
    const megaMenuLinks = Object.entries(menuLinks);
    console.log(megaMenuLinks, "jhghfdghjh");
    return (
        <div className={styles.mega_menu}>
            <ul>
                {/* {megaMenuLinks} */}
                {megaMenuLinks.map((menuItem) => {
                    return (
                        <li key={menuItem?.id} onMouseEnter={() => handleMenuItemHover(menuItem.image)}>
                            {menuItem?.menuText}
                        </li>
                    )
                })}
            </ul>
            <div className="mega-content">
                {currentImage && <img src={require(`${currentImage}`).default} alt="Mega Menu" />}
            </div>
        </div>
    )
}

export default MegaMenu
