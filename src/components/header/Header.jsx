import React from 'react'
import NavBar from '../navBar/NavBar'
import './Header.css';

function Header() {
    return (
        <div className="display-flex justify-content-space-between size">
            <div className='logo' style={{ margin: "2rem 3rem", color: "white" }}>
                <svg  width="40" height="40" viewBox="0 0 59 58" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                    <path  fill-rule="evenodd" clip-rule="evenodd" d="M50.3358 10.5882L31.7925 30.9555V30.9555C31.7925 32.9137 32.6783 34.7667 34.2022 35.9964L50.3358 49.015V10.5882ZM51.8578 4.60615C52.8362 3.46626 55 4.04106 55 5.44086V52.559C55 53.8504 53.109 54.4874 52.0256 53.5608L30.2036 34.8995C29.8898 34.6311 29.7142 34.2718 29.7142 33.8977V30.8635C29.7142 30.5643 29.8266 30.2725 30.0358 30.0288L51.8578 4.60615ZM16.2666 21.2119C16.9136 20.5008 18.1759 20.4446 18.9107 21.0942L28.8982 29.9227C29.1999 30.1893 29.3678 30.5414 29.3678 30.9073V33.9379C29.3678 34.2512 29.2446 34.5559 29.017 34.8057L19.9386 44.7672C19.3054 45.4621 18.0777 45.5348 17.3335 44.9168L5.50988 35.0988C4.90677 34.598 4.82065 33.7913 5.34839 33.2113L16.2666 21.2119ZM17.6772 22.5244L7.18833 34.0519L18.5213 43.4626L27.2896 33.8413V31.0212L17.6772 22.5244Z"  stroke="white" stroke-width="8" />
                </svg> bhishek()

            </div>
            <div>
                <NavBar />
            </div>
        </div>
    )
}

export default Header
