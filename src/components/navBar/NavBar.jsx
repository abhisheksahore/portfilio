import React from 'react'
import './navBar.css'

function NavBar() {
    return (
        <div className='nav-menu'>
            <ul className="display-flex">
                <li>Home</li>
                <li>Projects</li>
                <li>About me</li>
                <li>Contact me</li>
            </ul>
        </div>
    )
}

export default NavBar
