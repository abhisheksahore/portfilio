import React from 'react'
import NavBar from '../navBar/NavBar'
import './Header.css';

function Header() {
    return (
        <div className="display-flex justify-content-space-between">
            <div style={{backgroundColor: "red"}}>
                abhishek
            </div>
            <div style={{backgroundColor: "green"}}>
                <NavBar />
            </div>
        </div>
    )
}

export default Header
