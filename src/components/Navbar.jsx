import React from 'react'
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navcontainer">
            <div className="row">
                <div className="logo">
                    <Link
                        activeClass="active"
                        to="headerbg"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <img src="/images/logo-transparent-png.png" alt="logo" className='logoimage'
                        
                        />
                    </Link>
                </div>
                
                <div className='verticaldivider'>

                </div>
                <ul className="topbar">
                    <li>
                        <Link
                            
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to="headerbg"
                        >
                        HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            OUR COMPANY
                        </Link>
                    </li>
                    <li>
                        <Link
                            
                            to="about-scroll"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            activeClass="active"
                        >
                            PRODUCTS
                        </Link>
                    </li>
                    <li>
                        <Link
                            
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            activeClass="active"
                        >
                            SERVICES
                        </Link>
                    </li>
                    <li>
                        <Link
                            
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            activeClass="active"
                        >
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar