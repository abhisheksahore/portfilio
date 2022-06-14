import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Main from '../main/Main'
import './Home.css'

function Home() {
    return (
        <div className='home-container'>
            <div className='colored-strip'></div>
            <div className='home-content-wrapper'>
                <Header />
                <Main />
                <Footer />
            </div>
            <div className='flags-wrapper-vertical'>
                <div className='vertical-flag flag-color-white'></div>
                <div className='vertical-flag flag-color-grey'></div>
                <div className='vertical-flag flag-color-megenta'></div>
                <div className='vertical-flag flag-color-blue'></div>
            </div>
        </div>
    )
}

export default Home
