import React, { useEffect } from 'react';

const AddClassToHeader = ({ className }) => {
    useEffect(() => {
        const header = document.querySelector('header');
        if (!header) return;

        if (!header.classList.contains(className)) {
            header.classList.add(className);
        }

        return () => {
            if (header.classList.contains(className)) {
                header.classList.remove(className);
            }
        };
    }, [className]);

    return null;
};

export default AddClassToHeader;
