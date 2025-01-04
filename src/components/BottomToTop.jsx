import React from 'react';

const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bottom-to-top">
            <a href="#" className="to-top" onClick={scrollToTop}>
                <span className="fa-solid fa-arrow-up to-top-icon"></span>
            </a>
        </div>
    );
};

export default ScrollToTop;