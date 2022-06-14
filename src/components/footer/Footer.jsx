import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-text'>.about_me()</div>
                <div className='footer-text'>.about_work()</div>
            </div>
            <div className='flags-wrapper-horizontal'>
                <div className='horizontal-flag flag-color-blue'></div>
                <div className='horizontal-flag flag-color-megenta'></div>
                <div className='horizontal-flag flag-color-grey'></div>
                <div className='horizontal-flag flag-color-white'></div>
            </div>
        </>
    )
}

export default Footer