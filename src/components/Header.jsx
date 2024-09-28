import React from 'react';
import "../css/header.css";

// Header Component
function Header() {
    return (
        <div className='header'>
            {/* Title Section */}
            <div className='title'>
                {/* Logo Image */}
                <div className='img-Div'>
                    <img src="https://www.youtube.com/favicon.ico" alt="YouTube Logo" />
                </div>
                {/* Header Text */}
                YouTube İnternet Nasıl Çalışır?
            </div>
        </div>
    )
}

export default Header;
