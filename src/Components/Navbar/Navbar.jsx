import React from "react"
import './Navbar.css'
import Toggle from "../Toggle/Toggle"
import {Link} from 'react-scroll'
import Services from "../Services/Services"
import Experience from "../Experience/Experience"
import Portfolio from "../Portfolio/Portfolio"
import Testimonials from "../Testimonials/Testimonials"

const Navbar = () => {
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Trung</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyle: 'none'}}>
                        <Link spy={true} to={Navbar} smooth={true} activeClass="activeClass">
                            <li>Home</li>
                        </Link>

                        <Link spy={true} to={Services} smooth={true}>
                            <li>Services</li>
                        </Link>

                        <Link spy={true} to={Experience} smooth={true}>
                            <li>Experience</li>
                        </Link>

                        <Link spy={true} to={Portfolio} smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        
                        <Link spy={true} to={Testimonials} smooth={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact us
                </button>
            </div>

        </div>
    )
}

export default Navbar