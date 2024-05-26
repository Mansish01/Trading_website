import React, { useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import Menu from '@mui/icons-material/Menu';


const Navbar = () => {

    const[showMenu, setshowMenu] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 1100) {
        setshowMenu(false); // Reset the state when window size exceeds 768px
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
    const toggleMenu = () => {
        setshowMenu(!showMenu);
    };

  return (
    <nav className='navbar' id='navbar'>
        <div className="navcontainer">
            <div className="row">
                <div className="logo">
                    <Link
                        activeClass="active"
                        to="#"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <img src="/images/logo.png" alt="logo" className='logoimage'
                        
                    />
                    </Link>
                </div>
                
                <div className='verticaldivider'></div>

                <ul className="topbar">
                    <li>
                        <Link
                            
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to="#"
                        >
                        HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            
                            activeClass="active"
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link
                            
                            to="commoditycontainer"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            activeClass="active"
                        >
                            COMMODITIES
                        </Link>
                    </li>
                    <li>
                        <Link
                            
                            to="services"
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
                            
                            to="tiermembers"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            activeClass="active"
                        >
                            TIER PARTNERS
                        </Link>
                    </li>


                    <li>
                        <Link
                            
                            to="containerbelow"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            activeClass="active"
                        >
                            CONTACT US
                        </Link>
                    </li>


                </ul>

                <button className="menu-button" onClick={toggleMenu}>
                    <Menu className='menuicon'/>
                </button>

                {showMenu && (<div className="menu-container">
                    <ul className="menu-items">
                        <li>
                            <Link
                                
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                to="#"
                            >
                            HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                
                                activeClass="active"
                                to="aboutus"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link
                                
                                to="commoditycontainer"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                activeClass="active"
                            >
                                COMMODITIES
                            </Link>
                        </li>
                        <li>
                            <Link
                                
                                to="services"
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
                                
                                to="containerbelow"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                activeClass="active"
                            >
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </div>)}
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar