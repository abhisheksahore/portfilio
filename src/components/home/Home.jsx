import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Home.css'

function Home() {
    return (
        <div className='home-container'>
            <div className='colored-strip'></div>
            <div className='home-content-wrapper'>
                <Header />
                <Footer />
            </div>
        </div>
    )
}

export default Home
